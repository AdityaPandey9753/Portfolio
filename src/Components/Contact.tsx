import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ email: '', message: '' })
  const [sent, setSent] = useState(false)
  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  return (
    <section id="contact" className="bg-chalk py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs text-ink/40 tracking-[0.2em] uppercase mb-3">06 · Contact</p>
        <h2 className="font-display text-[64px] leading-none text-ink mb-4">
          LET'S<br /><span className="text-lime">BUILD</span> <span className="text-coral">TOGETHER</span>
        </h2>
        <p className="font-body text-base text-ink/50 mb-16 max-w-md">
          Drop your email and a short message — I'll follow up directly.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Form */}
          <div>
            {!sent ? (
              <div className="space-y-4">
                <input name="email" type="email" placeholder="Your email address"
                  value={form.email} onChange={handle}
                  className="w-full font-body bg-white border border-ink/15 rounded-2xl px-5 py-4 text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-lime transition-colors" />
                <textarea name="message" placeholder="Your message..." rows={5}
                  value={form.message} onChange={handle}
                  className="w-full font-body bg-white border border-ink/15 rounded-2xl px-5 py-4 text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-lime transition-colors resize-none" />
                <button onClick={() => { if (form.email && form.message) setSent(true) }}
                  className="w-full font-body font-medium bg-ink text-white py-4 rounded-2xl hover:bg-lime hover:text-ink transition-all duration-200 tracking-wide text-sm">
                  Send Message →
                </button>
              </div>
            ) : (
              <div className="bg-lime rounded-3xl p-10 text-center">
                <div className="font-display text-5xl text-ink mb-3">✓</div>
                <p className="font-body font-semibold text-ink text-lg mb-2">Message sent!</p>
                <p className="font-body text-sm text-ink/70">I'll get back to you soon.</p>
              </div>
            )}
          </div>

          {/* Right info */}
          <div className="space-y-4">
            {[
              { icon: '@', label: 'Email', val: 'aditya.pandey9753@gmail.com', color: 'bg-coral/10 text-coral' },
              { icon: 'G',  label: 'GitHub', val: 'github.com/adityapandey9753', color: 'bg-ink/10 text-ink' },
              { icon: 'in', label: 'LinkedIn', val: 'linkedin.com/in/adityapandey9753', color: 'bg-sky/10 text-sky' },
              { icon: '📍', label: 'Location', val: 'Thane, Maharashtra, India', color: 'bg-lime/10 text-lime' },
            ].map(({ icon, label, val, color }) => (
              <div key={label} className="bg-white rounded-2xl px-5 py-4 flex items-center gap-4 border border-ink/8 hover:border-ink/20 transition-colors">
                <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-body text-sm font-medium flex-shrink-0 ${color}`}>
                  {icon}
                </span>
                <div>
                  <p className="font-mono text-[10px] text-ink/40 uppercase tracking-wider">{label}</p>
                  <p className="font-body text-sm text-ink mt-0.5">{val}</p>
                </div>
              </div>
            ))}

            {/* AI chatbot teaser */}
            <div className="bg-violet rounded-2xl px-5 py-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white text-lg flex-shrink-0">✦</div>
              <div>
                <p className="font-body font-semibold text-white text-sm">Ask Aditya — AI Assistant</p>
                <p className="font-body text-xs text-white/70 mt-0.5 leading-relaxed">Claude-powered chatbot · ask anything about my skills, projects, or background</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}