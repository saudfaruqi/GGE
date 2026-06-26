interface SectionHeaderProps {
  number: string
  eyebrow: string
  title: React.ReactNode
  description?: string
}

export default function SectionHeader({ number, eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="px-6 md:px-12 py-20 md:py-32 flex flex-col md:flex-row md:items-end justify-between gap-12 reveal">
      <div className="flex items-end gap-8">
        <span className="font-serif text-[clamp(80px,15vw,180px)] leading-[0.7] text-[var(--paper-3)] select-none">
          {number}
        </span>
        <div className="pb-2">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--forest)] mb-4">
            — {eyebrow}
          </div>
          <h2 className="font-serif text-[clamp(32px,5vw,64px)] leading-[0.9] tracking-tighter text-[var(--ink)]">
            {title}
          </h2>
        </div>
      </div>
      {description && (
        <p className="font-sans text-[13px] leading-relaxed text-[var(--ink-60)] max-w-[280px]">
          {description}
        </p>
      )}
    </div>
  )
}