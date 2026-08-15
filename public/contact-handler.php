<?php
/**
 * contact-handler.php
 * -------------------------------------------------------------
 * Receives the Global Green Export contact form submission and
 * emails it to info@ and contact@globalgreenexport.com.
 *
 * DEPLOY: upload this file to the ROOT of your Hostinger hosting
 * (same level as index.html from your static export), so it's
 * reachable at:
 *   https://www.globalgreenexport.com/contact-handler.php
 *
 * The contact form's fetch() call (see contact/PageClient.tsx)
 * posts JSON to this exact path.
 * -------------------------------------------------------------
 */

// ---- CORS / method guard -------------------------------------------------
header("Content-Type: application/json; charset=UTF-8");

$allowedOrigin = "https://www.globalgreenexport.com";
header("Access-Control-Allow-Origin: $allowedOrigin");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
    exit;
}

// ---- Parse input (accepts JSON body or normal form POST) -----------------
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

function field($data, $key, $max = 2000) {
    if (!isset($data[$key])) return '';
    $v = trim((string) $data[$key]);
    $v = substr($v, 0, $max);
    // Strip anything that looks like header injection
    $v = str_replace(["\r", "\n"], ' ', $v);
    return $v;
}

$name     = field($data, 'name', 200);
$email    = field($data, 'email', 200);
$company  = field($data, 'company', 200);
$phone    = field($data, 'phone', 100);
$vertical = field($data, 'vertical', 100);
$howFound = field($data, 'howDidYouFind', 200);
$message  = trim((string) ($data['message'] ?? ''));
$message  = substr($message, 0, 5000);

// Honeypot field — if your form includes a hidden "website" input and a
// bot fills it in, silently accept without sending mail.
$honeypot = field($data, 'website', 200);
if ($honeypot !== '') {
    echo json_encode(["success" => true]);
    exit;
}

// ---- Validation ------------------------------------------------------
$errors = [];

if (mb_strlen($name) < 2) {
    $errors['name'] = 'Please enter your full name';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Please enter a valid email address';
}
if (mb_strlen($message) < 10) {
    $errors['message'] = 'Please provide more detail (minimum 10 characters)';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(["success" => false, "errors" => $errors]);
    exit;
}

// ---- Basic rate limiting (per IP, file-based, 1 submission / 30s) --------
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateDir = sys_get_temp_dir() . '/gge_contact_rl';
if (!is_dir($rateDir)) {
    @mkdir($rateDir, 0700, true);
}
$rateFile = $rateDir . '/' . md5($ip);
if (file_exists($rateFile) && (time() - filemtime($rateFile)) < 30) {
    http_response_code(429);
    echo json_encode(["success" => false, "error" => "Please wait a moment before submitting again."]);
    exit;
}
@touch($rateFile);

// ---- Build email -----------------------------------------------------
$to = "info@globalgreenexport.com, contact@globalgreenexport.com";
$subject = "New Enquiry — Global Green Export ($vertical)";
if ($vertical === '') {
    $subject = "New Enquiry — Global Green Export";
}

$bodyLines = [
    "New contact form submission",
    "-----------------------------------",
    "Name: $name",
    "Email: $email",
    "Company: " . ($company !== '' ? $company : '—'),
    "Phone: " . ($phone !== '' ? $phone : '—'),
    "Vertical of interest: " . ($vertical !== '' ? $vertical : '—'),
    "How they found us: " . ($howFound !== '' ? $howFound : '—'),
    "-----------------------------------",
    "Message:",
    $message,
    "-----------------------------------",
    "Submitted: " . date('Y-m-d H:i:s T'),
    "IP: $ip",
];
$body = implode("\n", $bodyLines);

// From address should be on your own domain to pass SPF; reply-to is the
// visitor's address so you can hit "Reply" directly.
$fromAddress = "noreply@globalgreenexport.com";
$safeName = str_replace(['"', "\r", "\n"], '', $name);

$headers = [];
$headers[] = "From: Global Green Export Website <$fromAddress>";
$headers[] = "Reply-To: \"$safeName\" <$email>";
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";
$headers[] = "X-Mailer: PHP/" . phpversion();

$sent = @mail($to, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Could not send message. Please email info@globalgreenexport.com directly."]);
}