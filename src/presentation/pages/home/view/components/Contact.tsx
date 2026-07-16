import { ExternalLink, Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-neutral-950 to-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">¡Colaboremos!</h2>
          <div className="w-24 h-px bg-gradient-to-r from-cyan-400 to-sky-400 mx-auto mb-6" />
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Abierto a proyectos donde haga falta construir, ordenar o escalar sistemas web end-to-end.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:cruzezequiel017@gmail.com"
            className="group rounded-2xl p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-1">Email</h3>
            <p className="text-slate-300 text-sm break-words">cruzezequiel017@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/cruzezequiel/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Linkedin className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
            <p className="text-slate-300 flex items-center gap-1 text-sm">
              Conectar <ExternalLink size={14} />
            </p>
          </a>

          <a
            href="https://github.com/CruzEzequiel"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Github className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-1">GitHub</h3>
            <p className="text-slate-300 flex items-center gap-1 text-sm">
              Ver proyectos <ExternalLink size={14} />
            </p>
          </a>
        </div>

        <div className="text-center">
          <p className="text-slate-400">Construyamos un sistema claro, útil y listo para crecer.</p>
        </div>
      </div>
    </section>
  )
}
