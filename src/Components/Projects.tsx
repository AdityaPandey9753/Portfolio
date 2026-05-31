import { useState } from 'react'
import { PROJECTS } from '../data/index.js'

const TAGS = ['All', 'Full Stack', 'ML', 'AI']

export default function Projects() {
  const [active, setActive] = useState('All')
  const visible = PROJECTS.filter(p => active === 'All' || p.tag === active)

  return (
    <section id="projects" className="bg-chalk py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="font-mono text-xs text-ink/40 tracking-[0.2em] uppercase mb-3">04 · Projects</p>
            <h2 className="font-display text-[64px] leading-none text-ink">
              SELECTED<br /><span className="text-violet">WORK</span>
            </h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {TAGS.map(t => (
              <button key={t} onClick={() => setActive(t)}
                className={`font-body text-sm px-5 py-2 rounded-full border transition-all duration-200 ${
                  active === t
                    ? 'bg-ink text-white border-ink'
                    : 'bg-white text-ink/60 border-ink/20 hover:border-ink/50'
                }`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {visible.map((p, i) => (
            <div key={p.id}
              className={`group bg-white rounded-3xl p-7 border-2 border-transparent hover:border-current transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${p.accentText} cursor-pointer`}
              style={{ '--tw-shadow-color': '0 0 0 rgba(0,0,0,0)' } as React.CSSProperties}>

              {/* Top row */}
              <div className="flex justify-between items-start mb-5">
                <span className={`font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full ${p.tagColor}`}>
                  {p.tag}
                </span>
                <span className="font-mono text-[10px] text-ink/40">{p.date}</span>
              </div>

              {/* Big index number */}
              <div className={`font-display text-6xl ${p.accentText} opacity-10 group-hover:opacity-20 transition-opacity mb-3 leading-none`}>
                {String(i + 1).padStart(2, '0')}
              </div>

              <h3 className="font-body font-semibold text-base text-ink mb-3 leading-snug group-hover:text-current transition-colors">
                {p.title}
              </h3>
              <p className="font-body text-sm text-ink/60 leading-relaxed mb-5">{p.desc}</p>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s, j) => (
                  <span key={j} className="font-mono text-[10px] px-2.5 py-1 bg-ink/5 text-ink/60 rounded-full border border-ink/10">
                    {s}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className={`mt-5 flex items-center gap-2 font-body text-xs ${p.accentText} opacity-0 group-hover:opacity-100 transition-opacity`}>
                <span>View Project</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}