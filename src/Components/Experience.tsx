import { EXPERIENCE } from '../data/index'

const accentMap: Record<string, { bg: string; text: string; border: string; pill: string }> = {
  lime:   { bg: 'bg-lime',   text: 'text-lime',   border: 'border-lime',   pill: 'bg-lime text-ink' },
  violet: { bg: 'bg-violet', text: 'text-violet', border: 'border-violet', pill: 'bg-violet text-white' },
}

export default function Experience() {
  return (
    <section id="experience" className="bg-ink text-white py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-white/30 tracking-[0.2em] uppercase mb-3">03 · Experience</p>
          <h2 className="font-display text-[64px] leading-none text-white">
            MY<br /><span className="text-lime">EXPERIENCE</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-16">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-lime via-violet to-coral" />

          {EXPERIENCE.map((e, i) => {
            const a = accentMap[e.color] || accentMap.lime
            return (
              <div key={i} className={`relative mb-20 last:mb-0`}>
                {/* Dot */}
                <div className={`absolute -left-8 md:-left-[52px] top-1 w-4 h-4 rounded-full ${a.bg} border-2 border-ink ring-4 ring-${e.color}/20`} />

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
                  {/* Left — meta */}
                  <div>
                    <span className={`font-body text-xs tracking-wide px-3 py-1.5 rounded-full ${a.pill} inline-block mb-3`}>
                      {e.period}
                    </span>
                    <h3 className="font-body font-semibold text-lg text-white mb-1">{e.role}</h3>
                    <p className={`font-body text-sm ${a.text}`}>{e.company}</p>
                    <p className="font-body text-xs text-white/40 mt-1">{e.location}</p>
                  </div>

                  {/* Right — bullets + stack */}
                  <div className="border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                    <ul className="space-y-3 mb-6">
                      {e.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 items-start">
                          <span className={`w-1.5 h-1.5 rounded-full ${a.bg} mt-2 flex-shrink-0`} />
                          <span className="font-body text-sm text-white/70 leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {e.stack.map((s, j) => (
                        <span key={j} className={`font-mono text-xs px-3 py-1.5 rounded-full border ${a.border} ${a.text} bg-white/5`}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}