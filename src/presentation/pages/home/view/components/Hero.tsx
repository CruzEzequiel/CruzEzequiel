import { ChevronDown, Download, GithubIcon, LinkedinIcon } from "lucide-react"
import { CV_URL, useCvAvailable } from "../../cv"

interface HeroProps {
  onNavigate: (sectionId: string) => void
}

export default function Hero({ onNavigate }: HeroProps) {
  const cvAvailable = useCvAvailable()

  return (
    <section id="home" className="pt-28 md:pt-32 pb-20 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-32 w-[40rem] h-[40rem] opacity-20 blur-3xl bg-[radial-gradient(ellipse_at_center,theme(colors.cyan.600),transparent_60%)]" />
        <div className="absolute -bottom-32 -left-24 w-[36rem] h-[36rem] opacity-20 blur-3xl bg-[radial-gradient(ellipse_at_center,theme(colors.cyan.800),transparent_60%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col items-start text-left max-w-3xl gap-6">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-100 leading-tight">
            Ezequiel Cruz
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-300 mt-2">Full Stack Developer</p>
        </div>
        <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl">
          Convierto procesos manuales en sistemas web automatizados, con APIs propias e inteligencia artificial integrada.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => onNavigate("about")}
            className="px-5 py-2 rounded-full font-medium shadow-sm bg-cyan-600 text-white hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 transition"
          >
            Conoce más
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="px-5 py-2 rounded-full font-medium border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-slate-300/20 transition"
          >
            Contactar
          </button>
          {cvAvailable && (
            <a
              href={CV_URL}
              download
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-medium border border-cyan-500/40 bg-cyan-500/10 text-cyan-200 hover:bg-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 transition"
            >
              <Download size={16} /> Descargar CV
            </a>
          )}
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
