interface SectionHeaderProps {
  tag: string;
  title: string;
  titleHighlight?: string;
  lead?: string;
  center?: boolean;
  dark?: boolean;
}

export default function SectionHeader({
  tag,
  title,
  titleHighlight,
  lead,
  center = false,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${center ? "text-center" : ""}`}>
      <span
        className="section-tag"
        style={{ color: "var(--gold)" }}
      >
        {tag}
      </span>
      <h2
        className="font-cormorant font-semibold leading-tight mb-4"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
          color: dark ? "#ffffff" : "var(--green-dark)",
          maxWidth: center ? "700px" : undefined,
          margin: center ? "0 auto 16px" : undefined,
        }}
      >
        {title}{" "}
        {titleHighlight && (
          <span style={{ color: "var(--gold)" }}>{titleHighlight}</span>
        )}
      </h2>
      {lead && (
        <p
          className="text-base font-light leading-relaxed"
          style={{
            color: dark ? "rgba(255,255,255,0.65)" : "#5a5a5a",
            maxWidth: "620px",
            margin: center ? "0 auto" : undefined,
          }}
        >
          {lead}
        </p>
      )}
    </div>
  );
}