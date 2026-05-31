export default function Footer() {
  const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact']
  return (
    <footer className="bg-ink text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display text-3xl tracking-widest">
          AP<span className="text-coral">.</span>
        </span>
        <div className="flex gap-6 flex-wrap justify-center">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="font-body text-xs text-white/40 hover:text-white transition-colors tracking-wide">
              {l}
            </a>
          ))}
        </div>
        <p className="font-mono text-xs text-white/30">© 2026 Aditya Pandey</p>
      </div>
      {/* Colour rule */}
      <div className="max-w-7xl mx-auto mt-8 flex gap-0 h-1 rounded-full overflow-hidden">
        <div className="flex-1 bg-lime" />
        <div className="flex-1 bg-coral" />
        <div className="flex-1 bg-violet" />
        <div className="flex-1 bg-sky" />
        <div className="flex-1 bg-rose" />
        <div className="flex-1 bg-amber" />
      </div>
    </footer>
  )
}