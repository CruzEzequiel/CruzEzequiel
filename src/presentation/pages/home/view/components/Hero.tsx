import { ChevronDown, GithubIcon, LinkedinIcon } from "lucide-react"

interface HeroProps {
  onNavigate: (sectionId: string) => void
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="pt-28 md:pt-32 pb-20 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-32 w-[40rem] h-[40rem] opacity-20 blur-3xl bg-[radial-gradient(ellipse_at_center,theme(colors.cyan.600),transparent_60%)]" />
        <div className="absolute -bottom-32 -left-24 w-[36rem] h-[36rem] opacity-20 blur-3xl bg-[radial-gradient(ellipse_at_center,theme(colors.indigo.600),transparent_60%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col items-start text-left max-w-3xl gap-6">
        <div>
          <p className="text-lg sm:text-xl font-medium text-slate-300 mb-1">Ezequiel Cruz</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-snug">
            <span className="block bg-gradient-to-r from-cyan-600 to-cyan-300 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>
        </div>
        <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl">
          Convierto procesos manuales en sistemas web automatizados, con APIs propias e inteligencia artificial integrada.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => onNavigate("about")}
            className="px-5 py-2 rounded-full font-medium shadow-sm bg-gradient-to-r from-cyan-600 to-sky-600 text-white hover:from-cyan-500 hover:to-sky-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 transition"
          >
            Conoce más
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="px-5 py-2 rounded-full font-medium border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-slate-300/20 transition"
          >
            Contactar
          </button>
        </div>

        <div className="flex space-x-4">
          <a href="https://github.com/CruzEzequiel" aria-label="GitHub" target="_blank" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <GithubIcon className="h-5 w-5 text-slate-200" />
          </a>
          <a href="https://linkedin.com/in/CruzEzequiel" aria-label="LinkedIn" target="_blank" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <LinkedinIcon className="h-5 w-5 text-slate-200" />
          </a>
        </div>
      </div>

      <button
        onClick={() => onNavigate("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 hover:text-slate-300 transition-colors"
        aria-hidden
      >
        <ChevronDown size={28} />
      </button>
    </section>
  )
}
