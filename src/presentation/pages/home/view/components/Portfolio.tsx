import { BookOpen, CalendarRange, ExternalLink, FileText, Github, LayoutTemplate, type LucideIcon } from "lucide-react"

const GITHUB = "https://github.com/CruzEzequiel"

interface Demo {
  title: string
  description: string
  stack: string[]
  demoUrl: string
  repoUrl: string
  image: string
  imageAlt: string
  icon: LucideIcon
}

interface Repo {
  name: string
  description: string
  icon: LucideIcon
}

const demos: Demo[] = [
  {
    title: "PDF Tools",
    description:
      "Une y divide archivos PDF directamente en el navegador. El procesamiento es local: tus archivos nunca se suben a un servidor.",
    stack: ["React", "TypeScript", "pdf-lib", "pdf.js"],
    demoUrl: "https://pdf-tools-two-teal.vercel.app/",
    repoUrl: `${GITHUB}/pdf-tools`,
    image: "demos/pdf-tools.webp",
    imageAlt: "Pantalla principal de PDF Tools con las herramientas para unir, dividir, extraer, reordenar y rotar PDFs",
    icon: FileText,
  },
  {
    title: "GanttApp",
    description:
      "Planificador de proyectos con diagrama de Gantt. Los proyectos viven en archivos JSON abiertos en tu equipo, sin cuenta ni nube.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://gantt-app-psi.vercel.app/",
    repoUrl: `${GITHUB}/gantt-app`,
    image: "demos/gantt-app.webp",
    imageAlt: "GanttApp con un proyecto de ejemplo de desarrollo de software: tareas, dependencias y avance",
    icon: CalendarRange,
  },
]

const repos: Repo[] = [
  {
    name: "frontend-convenciones",
    description: "Arquitectura para apps React + TypeScript: capas, páginas, contextos, rutas y casos de uso.",
    icon: BookOpen,
  },
  {
    name: "backend-convenciones",
    description:
      "Arquitectura para servicios FastAPI + PostgreSQL: controller → service → repository, modelos tipados, migraciones y despliegue en Cloud Run.",
    icon: BookOpen,
  },
  {
    name: "supabase-app-template",
    description: "Plantilla base con autenticación y arquitectura limpia (React 19, Vite, Supabase).",
    icon: LayoutTemplate,
  },
  {
    name: "android-app-template",
    description: "Plantilla básica para iniciar una app Android.",
    icon: LayoutTemplate,
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-100">Portafolio</h2>
          <div className="w-24 h-px bg-cyan-500 mx-auto mb-6" />
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto">
            Dos demos en vivo y las convenciones y plantillas que uso para construir aplicaciones de forma consistente.
          </p>
        </div>

        <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-300 mb-4">Demos en vivo</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {demos.map((demo) => {
            const Icon = demo.icon
            return (
              <div key={demo.title} className="rounded-lg border border-white/10 bg-white/5 p-5 flex flex-col">
                <a href={demo.demoUrl} target="_blank" rel="noopener noreferrer" className="block mb-4 overflow-hidden rounded-md border border-white/10">
                  <img
                    src={`${import.meta.env.BASE_URL}${demo.image}`}
                    alt={demo.imageAlt}
                    loading="lazy"
                    width={1100}
                    height={688}
                    className="w-full h-auto transition-transform duration-300 hover:scale-[1.02]"
                  />
                </a>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                    <Icon className="text-cyan-300" size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-100 mb-1">{demo.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{demo.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {demo.stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/10 text-slate-300 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3">
                  <a
                    href={demo.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-cyan-600 text-white hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 transition"
                  >
                    Ver demo <ExternalLink size={14} />
                  </a>
                  <a
                    href={demo.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-slate-300/20 transition"
                  >
                    <Github size={14} /> Código
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-300 mb-4">Convenciones y plantillas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {repos.map((repo) => {
            const Icon = repo.icon
            return (
              <a
                key={repo.name}
                href={`${GITHUB}/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                    <Icon className="text-cyan-300" size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-100 mb-1 flex items-center gap-2">
                      {repo.name}
                      <ExternalLink size={14} className="text-slate-500 group-hover:text-cyan-300 transition-colors" />
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{repo.description}</p>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
