import { useState, useRef, useEffect } from 'react'

interface Msg { from: 'user' | 'bot'; text: string }

const SYSTEM = `You are an AI assistant representing Aditya Pandey on his portfolio website. Answer in first person, concisely (2–3 sentences max), and with a friendly confident tone.

Background:
- Final-year B.E. CSE student, Bharati Vidyapeeth, CGPA 8.9, graduating June 2026
- Location: Thane, India | Email: aditya.pandey9753@gmail.com
- Skills: React, Node.js, Django, Flask, Python, TypeScript, PostgreSQL, MongoDB, Redis, Docker, WebSockets, TensorFlow, Scikit-learn, Supabase, GCP
- Internships: Full Stack Dev @ The Perfume Paradise (Apr–May 2026), ML Dev @ Bharati Vidyapeeth (Aug–Oct 2025)
- Projects: AI Proctoring Platform (team lead), Brain Tumor Detection (97%+ accuracy), Farmer's Marketplace, Diamond Price Prediction, Dental Management System
- Achievements: Odoo Hackathon @ Amity University, Published conference paper on AI proctoring, ML research paper in pipeline
- Tools used: Claude, Gemini, Ollama, Claude Code
- Open to full-time roles in Full Stack or AI/ML engineering`

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: 'bot', text: "Hey! I'm Aditya's AI assistant. Ask me anything about his skills, projects, or experience 👋" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [msgs])

  const send = async () => {
    if (!input.trim() || loading) return
    const userMsg = input.trim()
    setInput('')
    setMsgs(m => [...m, { from: 'user', text: userMsg }])
    setLoading(true)
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: SYSTEM,
          messages: [{ role: 'user', content: userMsg }],
        }),
      })
      const data = await res.json()
      setMsgs(m => [...m, { from: 'bot', text: data.content?.[0]?.text || "Reach out to Aditya directly at aditya.pandey9753@gmail.com!" }])
    } catch {
      setMsgs(m => [...m, { from: 'bot', text: "Something went wrong. Email Aditya at aditya.pandey9753@gmail.com" }])
    }
    setLoading(false)
  }

  return (
    <>
      {/* Floating button */}
      <button onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-violet text-white shadow-[0_4px_24px_rgba(139,92,246,0.5)] flex items-center justify-center text-xl transition-all hover:scale-110 hover:bg-violet/80"
        style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
        {open ? '×' : '✦'}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-3xl shadow-2xl border border-ink/10 overflow-hidden animate-fade-up">
          {/* Header */}
          <div className="bg-ink px-5 py-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-violet flex items-center justify-center text-white text-sm font-bold">A</div>
            <div>
              <p className="font-body text-sm font-semibold text-white">Ask Aditya</p>
              <p className="font-mono text-[10px] text-lime">● Online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-4 flex flex-col gap-3 bg-chalk">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl font-body text-xs leading-relaxed ${
                  m.from === 'user'
                    ? 'bg-ink text-white rounded-br-sm'
                    : 'bg-white text-ink border border-ink/10 rounded-bl-sm shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-ink/10 rounded-2xl rounded-bl-sm px-4 py-2.5 font-body text-xs text-ink/50 shadow-sm">
                  Thinking…
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-ink/8 flex gap-2">
            <input value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask something..."
              className="flex-1 font-body text-xs bg-chalk rounded-xl px-4 py-2.5 text-ink placeholder:text-ink/30 focus:outline-none border border-ink/10 focus:border-violet transition-colors" />
            <button onClick={send} disabled={loading}
              className="bg-violet text-white rounded-xl px-4 py-2.5 font-body text-xs font-medium hover:bg-violet/80 transition-colors disabled:opacity-50">
              →
            </button>
          </div>
        </div>
      )}
    </>
  )
}