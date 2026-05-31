import { useState, useEffect, useRef } from 'react'
import { STATS, MARQUEE_ITEMS } from '../data/index'

const ROLES = [
  'Full Stack Developer',
  'AI/ML Engineer',
  'Published Researcher',
  'Open Source Builder',
]

export default function Hero() {
  const [typed, setTyped] = useState('')
  const ri = useRef(0); const ci = useRef(0); const del = useRef(false)

  useEffect(() => {
    const tick = () => {
      const word = ROLES[ri.current]
      if (!del.current) {
        setTyped(word.slice(0, ++ci.current))
        if (ci.current === word.length) { del.current = true; return setTimeout(tick, 1800) }
      } else {
        setTyped(word.slice(0, --ci.current))
        if (ci.current === 0) { del.current = false; ri.current = (ri.current + 1) % ROLES.length }
      }
      setTimeout(tick, del.current ? 40 : 80)
    }
    const t = setTimeout(tick, 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen bg-chalk overflow-hidden" id="about">

      {/* Coloured blocks — top right corner decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-lime/20 rounded-bl-[80px] pointer-events-none" />
      <div className="absolute top-16 right-16 w-40 h-40 bg-coral/30 rounded-3xl pointer-events-none animate-float" />
      <div className="absolute top-4 right-4 w-20 h-20 bg-violet/20 rounded-2xl pointer-events-none" />

      {/* Bottom left decoration */}
      <div className="absolute bottom-32 left-0 w-48 h-48 bg-sky/20 rounded-r-full pointer-events-none" />
      <div className="absolute bottom-16 left-20 w-24 h-24 bg-rose/20 rounded-full pointer-events-none animate-float [animation-delay:1s]" />

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div className="animate-fade-up">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 bg-white border border-lime/30 rounded-full px-4 py-2 mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
              <span className="font-body text-xs text-ink/70 tracking-wide">Open to full-time roles · Jun 2026</span>
            </div>

            <h1 className="font-display text-[clamp(72px,10vw,120px)] leading-[0.88] text-ink mb-6 tracking-wide">
              ADI<span className="text-coral">TY</span>A<br />
              <span className="text-lime">PAN</span><span className="text-violet">DEY</span>
            </h1>

            <div className="flex items-center gap-2 mb-4 h-8">
              <span className="font-body text-lg text-ink/70">{typed}</span>
              <span className="w-0.5 h-5 bg-coral animate-blink" />
            </div>

            <p className="font-body text-sm text-ink/50 mb-10 tracking-wide">
              B.E. CSE · Bharati Vidyapeeth · Thane, India · CGPA 8.9
            </p>

            <div className="flex gap-3 flex-wrap">
              <a href="#projects"
                className="font-body text-sm font-medium bg-ink text-white px-7 py-3.5 rounded-full hover:bg-lime hover:text-ink transition-all duration-200 tracking-wide">
                View Work →
              </a>
              <a href="#contact"
                className="font-body text-sm font-medium bg-white text-ink border border-ink/20 px-7 py-3.5 rounded-full hover:border-coral hover:text-coral transition-all duration-200 tracking-wide">
                Get In Touch
              </a>
              <a href="https://github.com/adityapandey9753" target="_blank" rel="noreferrer"
                className="font-body text-sm font-medium bg-violet/10 text-violet border border-violet/20 px-7 py-3.5 rounded-full hover:bg-violet hover:text-white transition-all duration-200 tracking-wide">
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-2 gap-4 animate-fade-up [animation-delay:0.2s]">
            {STATS.map((s, i) => {
              const bgs = ['bg-lime', 'bg-coral', 'bg-violet', 'bg-sky']
              const txts = ['text-ink', 'text-white', 'text-white', 'text-ink']
              return (
                <div key={i} className={`${bgs[i]} ${txts[i]} rounded-3xl p-8 flex flex-col justify-between min-h-[140px] shadow-lg hover:scale-[1.03] transition-transform`}>
                  <span className="font-display text-5xl tracking-wide">{s.n}</span>
                  <span className={`font-body text-sm tracking-wide ${txts[i] === 'text-ink' ? 'opacity-60' : 'opacity-80'}`}>{s.label}</span>
                </div>
              )
            })}

            {/* About card */}
            <div className="col-span-2 bg-ink text-white rounded-3xl p-7 shadow-lg">
              <div className="flex items-start justify-between mb-3">
                <span className="font-display text-xl tracking-wide">Who am I</span>
                <span className="bg-lime text-ink text-xs font-body px-3 py-1 rounded-full">Final Year</span>
              </div>
              <p className="font-body text-sm text-white/70 leading-relaxed">
                Final-year CS engineer building scalable systems and AI-driven applications. Two internships, a published conference paper, and an ML paper in the pipeline.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Marquee strip */}
      <div className="mt-20 bg-ink py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="font-display text-lg tracking-widest mx-6 text-white/30">
              {i % 3 === 0
                ? <span className="text-lime">{item}</span>
                : i % 3 === 1
                ? <span className="text-coral">{item}</span>
                : <span className="text-violet">{item}</span>
              }
              <span className="text-white/20 mx-3">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}