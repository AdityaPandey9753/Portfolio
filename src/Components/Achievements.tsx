export default function Achievements() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs text-ink/40 tracking-[0.2em] uppercase mb-3">05 · Achievements</p>
        <h2 className="font-display text-[64px] leading-none text-ink mb-16">
          HACKATHONS &<br /><span className="text-rose">RECOGNITION</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Hackathon card */}
          <div className="bg-lime rounded-3xl p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform">
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full" />
            <div className="relative">
              <span className="font-mono text-[10px] tracking-widest uppercase bg-ink text-white px-3 py-1.5 rounded-full inline-block mb-6">
                Hackathon · Sep 2025
              </span>
              <h3 className="font-display text-4xl text-ink leading-tight mb-3">
                FARMER'S<br />MARKETPLACE
              </h3>
              <p className="font-body text-xs text-ink/60 mb-4">Amity University · Odoo Hackathon</p>
              <p className="font-body text-sm text-ink/70 leading-relaxed mb-6">
                D2C e-commerce on Odoo with Blockchain contract system and real-time messaging for buyer-producer price negotiations.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Odoo', 'Blockchain', 'Real-time Messaging'].map(t => (
                  <span key={t} className="font-mono text-[10px] bg-ink/10 text-ink px-3 py-1.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Paper card */}
          <div className="bg-ink rounded-3xl p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform">
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-violet/10 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-coral/10 rounded-full" />
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] tracking-widest uppercase bg-violet text-white px-3 py-1.5 rounded-full inline-block">
                  Research Paper
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase bg-lime text-ink px-3 py-1.5 rounded-full inline-block">
                  Published
                </span>
              </div>
              <h3 className="font-display text-4xl text-white leading-tight mb-3">
                BRAIN TUMOR<br />DETECTION
              </h3>
              <p className="font-body text-xs text-white/40 mb-4">Add Conference / Journal name · 2025</p>
              <p className="font-body text-sm text-white/60 leading-relaxed mb-6">
                Multi-modal early-fusion approach combining InceptionV3, Xception, and VGG16 via ensemble transfer learning for 97%+ accuracy MRI tumor classification.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Deep Learning', 'Transfer Learning', 'Medical AI'].map(t => (
                  <span key={t} className="font-mono text-[10px] border border-white/20 text-white/60 px-3 py-1.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ML paper in pipeline */}
          <div className="md:col-span-2 border-2 border-dashed border-violet/30 rounded-3xl p-8 flex items-center justify-between gap-6 hover:border-violet/60 transition-colors group">
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-violet mb-3 inline-block">In the Pipeline</span>
              <h3 className="font-body font-semibold text-xl text-ink mb-2">ML Research Paper — Brain Tumor Detection (Internship)</h3>
              <p className="font-body text-sm text-ink/60">Based on internship at Bharati Vidyapeeth · currently under review for publication</p>
            </div>
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-violet/10 flex items-center justify-center">
              <span className="font-display text-2xl text-violet">→</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}