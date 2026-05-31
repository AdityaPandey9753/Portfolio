import { useState } from 'react'
import { SKILLS } from '../data/index.js'

type SkillCategory = keyof typeof SKILLS

export default function Skills() {
  const cats = ['All', ...Object.keys(SKILLS)] as const
  const [active, setActive] = useState<string>('All')

  const filtered = active === 'All'
    ? Object.entries(SKILLS)
    : Object.entries(SKILLS).filter(([cat]) => cat === active)

  return (
    <section id="skills" className="bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="font-mono text-xs text-ink/40 tracking-[0.2em] uppercase mb-3">02 · Skills</p>
            <h2 className="font-display text-[64px] leading-none text-ink">
              WHAT I<br /><span className="text-coral">WORK</span> WITH
            </h2>
          </div>
          {/* Filters */}
          <div className="flex gap-2 flex-wrap">
            {cats.map(c => (
              <button key={c} onClick={() => setActive(c)}
                className={`font-body text-sm px-5 py-2 rounded-full border transition-all duration-200 ${
                  active === c
                    ? 'bg-ink text-white border-ink'
                    : 'bg-transparent text-ink/60 border-ink/20 hover:border-ink/50'
                }`}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Skill category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(([cat, { color, items }]) => (
            <div key={cat} className="border border-ink/10 rounded-3xl p-8 hover:border-ink/30 transition-all group">
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-ink/40 mb-5">{cat}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((item, i) => (
                  <span key={i} className={`font-body text-xs px-4 py-2 rounded-full border ${color} transition-all hover:scale-105`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal coloured rule strip */}
        <div className="mt-16 flex gap-0 h-2 rounded-full overflow-hidden">
          <div className="flex-1 bg-lime" />
          <div className="flex-1 bg-coral" />
          <div className="flex-1 bg-violet" />
          <div className="flex-1 bg-sky" />
          <div className="flex-1 bg-rose" />
          <div className="flex-1 bg-amber" />
        </div>
      </div>
    </section>
  )
}