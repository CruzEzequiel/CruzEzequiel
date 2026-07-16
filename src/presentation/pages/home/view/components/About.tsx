import { GithubIcon, LinkedinIcon, Mail, MapPin } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-neutral-900">Acerca de Mí</h2>
          <div className="w-24 h-px bg-gradient-to-r from-sky-400 to-cyan-500 mx-auto mb-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-1">
            <p className="text-lg text-slate-600 leading-relaxed">
              Soy Full Stack Developer enfocado en construir sistemas web bien estructurados y fáciles de usar.
              Trabajo sobre todo en soluciones que ordenan procesos, conectan servicios y reducen carga operativa.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              He desarrollado plataformas de gestión inmobiliaria, sistemas para manufactura industrial y soluciones financieras,
              integrando APIs externas, bureaus de crédito, notificaciones, análisis de datos, reportes y flujos de automatización.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Me enfoco en buenas prácticas de desarrollo: arquitecturas escalables, APIs RESTful documentadas y versionadas,
              separación de responsabilidades y despliegue en la nube con GCP y Azure.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-5 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg shadow-sm border border-slate-100">
                <div className="text-3xl font-bold text-cyan-600 mb-1">3+</div>
                <div className="text-slate-600 font-medium">Años de Experiencia</div>
              </div>
              <div className="text-center p-5 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg shadow-sm border border-slate-100">
                <div className="text-3xl font-bold text-emerald-600 mb-1">5+</div>
                <div className="text-slate-600 font-medium">Proyectos de impacto</div>
              </div>
            </div>
          </div>

          <div className="relative order-2 mx-auto md:ml-auto md:mr-0" style={{ maxWidth: "340px" }}>
            <div className="w-full h-auto bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-xl border border-slate-100 flex flex-col justify-between p-6 relative z-10">
              <div>
                <div className="flex items-center mb-3">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-700 to-indigo-700 bg-clip-text text-transparent">
                    Ezequiel Cruz
                  </h3>
                </div>
                <p className="text-slate-600 font-medium mb-2">Full Stack Developer</p>
                <p className="text-sm text-slate-500 italic mb-4 border-l-2 border-slate-200 pl-3">
                  "Sistemas web claros, escalables y pensados para operar mejor"
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="px-2 py-1 text-xs rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200 font-medium">
                    React
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 font-medium">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                    APIs
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-purple-50 text-purple-700 border border-purple-200 font-medium">
                    Supabase
                  </span>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 mt-2">
                <p className="text-sm text-slate-500 mb-2 flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-slate-400" /> cruzezequiel017@gmail.com
                </p>
                <p className="text-sm text-slate-500 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-slate-400" /> CDMX, México
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href="https://github.com/CruzEzequiel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-slate-500 hover:text-cyan-600 hover:border-cyan-200 hover:bg-cyan-50 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://linkedin.com/in/CruzEzequiel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-slate-500 hover:text-cyan-600 hover:border-cyan-200 hover:bg-cyan-50 transition-colors"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="mailto:cruzezequiel017@gmail.com"
                      className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-slate-500 hover:text-cyan-600 hover:border-cyan-200 hover:bg-cyan-50 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <img
                  src="./qr-linkedin.png"
                  alt="Linkedin QR"
                  className="w-16 h-16 absolute bottom-2 right-2 opacity-80 hidden md:block"
                />
              </div>
            </div>

            <div className="absolute -bottom-3 -right-3 w-full h-full bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 rounded-xl -z-10 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
