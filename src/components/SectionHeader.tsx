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
    <div
      style={{
        marginBottom: "56px",
        textAlign: center ? "center" : "left",
      }}
    >
      {/* Tag with line accent */}
      <p
        style={{
          fontSize: "0.65rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#3a8042",
          fontWeight: 500,
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: center ? "center" : "flex-start",
        }}
      >
        <span
          style={{
            width: "28px",
            height: "1px",
            background: "#3a8042",
            display: "inline-block",
            flexShrink: 0,
          }}
        />
        {tag}
      </p>

      {/* Heading */}
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: "-0.015em",
          color: dark ? "#ffffff" : "#0a0a0a",
          maxWidth: center ? "700px" : undefined,
          margin: center ? "0 auto 16px" : "0 0 16px",
        }}
      >
        {title}{" "}
        {titleHighlight && (
          <em
            style={{
              fontStyle: "italic",
              color: dark ? "rgba(255,255,255,0.35)" : "#1a3d1e",
            }}
          >
            {titleHighlight}
          </em>
        )}
      </h2>

      {/* Lead text */}
      {lead && (
        <p
          style={{
            fontSize: "0.95rem",
            fontWeight: 300,
            lineHeight: 1.85,
            color: dark ? "rgba(255,255,255,0.38)" : "rgba(0,0,0,0.45)",
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