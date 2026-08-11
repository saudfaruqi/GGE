// src/app/contact/page.tsx
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react";

// ============================================================
// COMPONENTS
// ============================================================

function Reveal({ 
  children, 
  delay = 0, 
  direction = "up",
  duration = 0.8,
  className = "",
}: { 
  children: React.ReactNode; 
  delay?: number; 
  direction?: "up" | "left" | "right";
  duration?: number;
  className?: string;
}) {
  const offset = { 
    up: { y: 30 }, 
    left: { x: -30 }, 
    right: { x: 30 },
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, ...offset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, ease: [0.16, 1, 0.3, 1], delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ 
  label, 
  title, 
  subtitle, 
  centered = false,
}: { 
  label: string; 
  title: string | React.ReactNode; 
  subtitle?: string; 
  centered?: boolean;
}) {
  return (
    <Reveal className={`${centered ? "text-center" : ""}`}>
      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--jade)]">— {label}</span>
      <h2 className="font-display text-[clamp(48px,7vw,96px)] leading-[0.9] tracking-tight text-[var(--ink)] mt-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[15px] text-[var(--ink-55)] mt-4 ${centered ? "max-w-2xl mx-auto" : "max-w-xl"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}


// ============================================================
// CONTACT PAGE
// ============================================================

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    vertical: "",
    message: "",
    howDidYouFind: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  }, [errors]);

  const validate = useCallback(() => {
    const newErrors: Record<string, string> = {};
    
    if (formState.name.trim().length < 2) {
      newErrors.name = "Please enter your full name";
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (formState.message.trim().length < 10) {
      newErrors.message = "Please provide more detail (minimum 10 characters)";
    }
    
    return newErrors;
  }, [formState]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstError = Object.keys(validationErrors)[0];
      document.getElementById(firstError)?.focus();
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: "",
        email: "",
        company: "",
        phone: "",
        vertical: "",
        message: "",
        howDidYouFind: "",
      });
    }, 5000);
  }, [validate]);

  const contactInfo = [
    {
      icon: MapPin,
      label: "Visit Us",
      details: [
        "7550 East 53rd Place, STE 17125",
        "Denver, CO 80217, USA",
        "Sukhumvit Road, Bangkok 10110, Thailand",
      ],
    },
    {
      icon: Mail,
      label: "Email Us",
      details: ["info@globalgreenexport.com", "sales@globalgreenexport.com"],
      action: "mailto:info@globalgreenexport.com",
    },
    {
      icon: Phone,
      label: "Call Us",
      details: ["+66 2 123 4567", "+1 (303) 555-0123"],
      action: "tel:+6621234567",
    },
    {
      icon: Clock,
      label: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM ICT",
        "Saturday: 9:00 AM - 2:00 PM ICT",
        "Sunday: Closed",
      ],
    },
  ];

  const verticals = [
    "Cannabis",
    "Hemp Derivatives",
    "Housing Materials",
    "Appliances",
    "HVAC Equipment",
  ];

  const howDidYouFindOptions = [
    "Search Engine",
    "LinkedIn",
    "Referral",
    "Trade Show",
    "Social Media",
    "Industry Publication",
    "Other",
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-[var(--ink)] py-32 md:py-48 overflow-hidden" aria-label="Contact hero">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--jade)_1px,_transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="px-5 md:px-12 max-w-[1800px] mx-auto relative z-10">
          <div className="max-w-4xl">
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--jade)]">— Get In Touch</span>
                <StampSeal label="Connect" size="sm" rotate={-6} />
              </div>
              <h1 className="font-display text-[clamp(48px,10vw,120px)] leading-[0.85] tracking-tight text-white/90">
                Let's Start a
                <br />
                <span className="text-[var(--jade)] italic">Conversation</span>
              </h1>
              <p className="text-[15px] text-white/55 max-w-lg mt-6">
                Ready to source from Thailand? Have questions about compliance, pricing, or documentation? 
                Our team is here to help.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM & INFO ── */}
      <section className="bg-[var(--paper)] py-24">
        <div className="px-5 md:px-12 max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div>
              <SectionHeader 
                label="Contact Information" 
                title="Reach Out Directly"
                subtitle="Our team is available to answer your questions about sourcing, compliance, and logistics."
              />

              <div className="space-y-8 mt-12">
                {contactInfo.map((info, index) => (
                  <Reveal key={info.label} direction="left" delay={index * 0.1}>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full border border-[var(--line)] flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-[var(--jade)]" />
                      </div>
                      <div>
                        <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--ink-30)] mb-2">
                          {info.label}
                        </h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-[14px] text-[var(--ink-60)] leading-relaxed">
                            {detail}
                          </p>
                        ))}
                        {info.action && (
                          <Link 
                            href={info.action}
                            className="inline-block mt-2 font-mono text-[10px] tracking-[0.15em] uppercase text-[var(--jade)] hover:text-[var(--jade-deep)] transition-colors"
                          >
                            Contact Now →
                          </Link>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Map placeholder */}
              <Reveal direction="up" delay={0.4} className="mt-12">
                <div className="rounded-2xl overflow-hidden border border-[var(--line)] h-[200px] bg-[var(--paper-2)] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-8 h-8 text-[var(--jade)] mx-auto mb-2" />
                      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--ink-30)]">
                        Bangkok, Thailand
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Contact Form */}
            <div>
              <Reveal direction="right">
                <div className="bg-[var(--paper-2)] p-8 md:p-12 rounded-2xl border border-[var(--line)]">
                  <h3 className="font-display text-[clamp(24px,3vw,36px)] text-[var(--ink)] mb-2">
                    Send a Message
                  </h3>
                  <p className="text-[13px] text-[var(--ink-55)] mb-8">
                    Complete the form below and we'll respond within 48 business hours.
                  </p>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-[var(--jade)]/10 flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-[var(--jade)]" />
                      </div>
                      <h4 className="font-display text-[24px] text-[var(--ink)] mb-2">
                        Message Sent!
                      </h4>
                      <p className="text-[13px] text-[var(--ink-55)]">
                        Thank you for reaching out. We'll get back to you within 48 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="font-mono text-[9px] tracking-[0.25em] uppercase text-[var(--ink-40)] block mb-2">
                          Full Name <span className="text-[var(--stamp)]">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={formState.name}
                          onChange={handleChange}
                          className={`w-full bg-[var(--paper)] border ${
                            errors.name ? "border-[var(--stamp)]" : "border-[var(--line)]"
                          } rounded-lg px-4 py-3 text-[14px] text-[var(--ink)] outline-none transition-colors focus:border-[var(--jade)]`}
                          placeholder="John Smith"
                          aria-invalid={!!errors.name}
                        />
                        {errors.name && (
                          <p className="font-mono text-[10px] text-[var(--stamp)] mt-1">{errors.name}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="font-mono text-[9px] tracking-[0.25em] uppercase text-[var(--ink-40)] block mb-2">
                          Email Address <span className="text-[var(--stamp)]">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          className={`w-full bg-[var(--paper)] border ${
                            errors.email ? "border-[var(--stamp)]" : "border-[var(--line)]"
                          } rounded-lg px-4 py-3 text-[14px] text-[var(--ink)] outline-none transition-colors focus:border-[var(--jade)]`}
                          placeholder="john@company.com"
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && (
                          <p className="font-mono text-[10px] text-[var(--stamp)] mt-1">{errors.email}</p>
                        )}
                      </div>

                      {/* Company & Phone */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="font-mono text-[9px] tracking-[0.25em] uppercase text-[var(--ink-40)] block mb-2">
                            Company
                          </label>
                          <input
                            id="company"
                            type="text"
                            value={formState.company}
                            onChange={handleChange}
                            className="w-full bg-[var(--paper)] border border-[var(--line)] rounded-lg px-4 py-3 text-[14px] text-[var(--ink)] outline-none transition-colors focus:border-[var(--jade)]"
                            placeholder="Company Name"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="font-mono text-[9px] tracking-[0.25em] uppercase text-[var(--ink-40)] block mb-2">
                            Phone
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            value={formState.phone}
                            onChange={handleChange}
                            className="w-full bg-[var(--paper)] border border-[var(--line)] rounded-lg px-4 py-3 text-[14px] text-[var(--ink)] outline-none transition-colors focus:border-[var(--jade)]"
                            placeholder="+66 2 123 4567"
                          />
                        </div>
                      </div>

                      {/* Vertical */}
                      <div>
                        <label htmlFor="vertical" className="font-mono text-[9px] tracking-[0.25em] uppercase text-[var(--ink-40)] block mb-2">
                          Vertical of Interest
                        </label>
                        <select
                          id="vertical"
                          value={formState.vertical}
                          onChange={handleChange}
                          className="w-full bg-[var(--paper)] border border-[var(--line)] rounded-lg px-4 py-3 text-[14px] text-[var(--ink)] outline-none transition-colors focus:border-[var(--jade)] appearance-none"
                        >
                          <option value="">Select a vertical</option>
                          {verticals.map((v) => (
                            <option key={v} value={v}>{v}</option>
                          ))}
                        </select>
                      </div>

                      {/* How Did You Find Us */}
                      <div>
                        <label htmlFor="howDidYouFind" className="font-mono text-[9px] tracking-[0.25em] uppercase text-[var(--ink-40)] block mb-2">
                          How Did You Find Us?
                        </label>
                        <select
                          id="howDidYouFind"
                          value={formState.howDidYouFind}
                          onChange={handleChange}
                          className="w-full bg-[var(--paper)] border border-[var(--line)] rounded-lg px-4 py-3 text-[14px] text-[var(--ink)] outline-none transition-colors focus:border-[var(--jade)] appearance-none"
                        >
                          <option value="">Select an option</option>
                          {howDidYouFindOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="font-mono text-[9px] tracking-[0.25em] uppercase text-[var(--ink-40)] block mb-2">
                          Message <span className="text-[var(--stamp)]">*</span>
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          value={formState.message}
                          onChange={handleChange}
                          className={`w-full bg-[var(--paper)] border ${
                            errors.message ? "border-[var(--stamp)]" : "border-[var(--line)]"
                          } rounded-lg px-4 py-3 text-[14px] text-[var(--ink)] outline-none transition-colors focus:border-[var(--jade)] resize-none`}
                          placeholder="Tell us about your requirements, volume, destination, and any specific questions..."
                          aria-invalid={!!errors.message}
                        />
                        {errors.message && (
                          <p className="font-mono text-[10px] text-[var(--stamp)] mt-1">{errors.message}</p>
                        )}
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-3 bg-[var(--ink)] text-[var(--paper)] font-mono text-[10px] tracking-[0.25em] uppercase px-6 py-4 rounded-lg hover:bg-[var(--jade-deep)] transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </button>

                      <p className="text-[10px] text-[var(--ink-35)] text-center font-mono tracking-[0.15em] uppercase">
                        We respect your privacy. Your information will never be shared.
                      </p>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        
      </section>

      {/* ── CTA ── */}
      <section className="bg-[var(--ink)] py-24">
        <div className="px-5 md:px-12 max-w-[1800px] mx-auto text-center">
          <Reveal>
            <div className="inline-block px-6 py-2 border border-[var(--jade)]/30 rounded-full mb-8">
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[var(--jade)]">We're Here to Help</span>
            </div>
            <h2 className="font-display text-[clamp(32px,5vw,72px)] leading-[0.9] tracking-tight text-white/90">
              Ready to Build Your
              <br />
              <span className="text-[var(--jade)] italic">Global Supply Chain?</span>
            </h2>
            <p className="text-[15px] text-white/40 max-w-lg mx-auto mt-6">
              Whether you're a licensed importer, pharmaceutical company, or commercial developer — we're ready to support your sourcing needs.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] uppercase px-10 py-5 bg-[var(--jade)] text-[var(--paper)] hover:bg-white hover:text-[var(--ink)] transition-all duration-500 rounded-lg"
              >
                Explore Products
              </Link>
              <Link
                href="/wholesale"
                className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] uppercase px-10 py-5 border border-white/30 text-white/70 hover:bg-white/10 transition-colors rounded-lg"
              >
                View Wholesale
              </Link>
            </div>
          </Reveal>
        </div>
        
      </section>
    </>
  );
}

// ============================================================
// STAMP SEAL COMPONENT (reused)
// ============================================================

function StampSeal({ label, sub, size = "md", rotate = -8, className = "" }: { 
  label: string; 
  sub?: string; 
  size?: "sm" | "md" | "lg";
  rotate?: number;
  className?: string;
}) {
  const sizes = { sm: "w-12 h-12", md: "w-16 h-16", lg: "w-24 h-24" };
  const textSizes = { sm: "text-[8px]", md: "text-[9px]", lg: "text-[11px]" };
  
  return (
    <div 
      className={`${sizes[size]} shrink-0 text-[var(--stamp)] ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <div className="relative w-full h-full border-2 border-current rounded-full flex items-center justify-center">
        <div className="absolute inset-1 border border-current rounded-full opacity-50" />
        <div className={`text-center px-2 ${textSizes[size]}`}>
          <div className="font-mono tracking-[0.15em] uppercase leading-tight">{label}</div>
          {sub && <div className="font-mono tracking-[0.1em] uppercase opacity-60 text-[0.7em] mt-0.5">{sub}</div>}
        </div>
      </div>
    </div>
  );
}