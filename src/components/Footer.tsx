import Link from 'next/link'
import Image from 'next/image'

const verticals = ['Cannabis', 'Hemp Derivatives', 'Housing Materials', 'Appliances', 'HVAC Equipment']
const framework = ['How We Operate', 'Compliance Framework', 'Export Markets', 'Fee-Based Sourcing', 'Start an Enquiry']

const ArrowIcon = () => (
  <svg width="8" height="8" viewBox="0 0 10 10" fill="none" className="opacity-0 group-hover:opacity-100 transition-opacity">
    <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] border-t border-white/5 pt-24 pb-12">
      <div className="px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          {/* Brand */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-10 w-[100px] h-auto">
                <Image src="/logo1.png" alt="Global Green Exports" width={100} height={50} className="invert" />
              </div>
              <p className="font-sans text-[13px] leading-relaxed text-white/60 max-w-sm mb-12">
                Specialist sourcing and export house focused on high-compliance Thai supply chains. Escrow-protected settlement protocols. Fully documented.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div>
                <span className="font-mono text-[9px] tracking-widest uppercase text-white/80 block mb-4">Corporate HQ</span>
                <address className="font-mono text-[10px] leading-relaxed text-white/80 not-italic uppercase tracking-wider">
                  7550 East 53rd Place<br />
                  STE 17125, Denver, CO<br />
                  80217, USA
                </address>
              </div>
              <div>
                <span className="font-mono text-[9px] tracking-widest uppercase text-white/80 block mb-4">Operations Hub</span>
                <p className="font-mono text-[10px] leading-relaxed text-white/80 uppercase tracking-wider">
                  Sukhumvit Road<br />
                  Bangkok 10110<br />
                  Thailand
                </p>
              </div>
            </div>
          </div>

          {/* Verticals */}
          <div className="lg:col-span-3 lg:col-start-7">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/80 block mb-8">— Verticals</span>
            <ul className="space-y-4">
              {verticals.map((v) => (
                <li key={v}>
                  <Link href="/products" className="group flex items-center justify-between font-sans text-xs text-white/80 hover:text-white transition-all duration-500">
                    <span className="group-hover:tracking-widest transition-all duration-500">{v}</span>
                    <ArrowIcon />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Framework */}
          <div className="lg:col-span-3">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/80 block mb-8">— Framework</span>
            <ul className="space-y-4">
              {framework.map((f) => (
                <li key={f}>
                  <Link href="/#contact" className="group flex items-center justify-between font-sans text-xs text-white/80 hover:text-white transition-all duration-500">
                    <span className="group-hover:tracking-widest transition-all duration-500">{f}</span>
                    <ArrowIcon />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <span className="font-mono text-[9px] tracking-widest text-white/80 uppercase">
            © {new Date().getFullYear()} Global Green Exports LLC
          </span>
          <p className="font-mono text-[9px] leading-relaxed text-white/50 uppercase tracking-[0.05em] max-w-lg lg:text-right">
            Global compliance notice: Cannabis and hemp transactions require valid import authorization in the destination jurisdiction. Subject to local regulations.
          </p>
        </div>
      </div>
    </footer>
  )
}