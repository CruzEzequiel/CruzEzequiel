import { Bot, Boxes, Brain, Cloud, Code, Database, Network, Shield } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Vite", "React Query"],
    icon: Code,
    color: "from-cyan-500 to-blue-500",
  },
  {
    category: "Backend",
    items: ["Python", "FastAPI", "Node.js", "NestJS"],
    icon: Database,
    color: "from-emerald-500 to-teal-500",
  },
  {
    category: "Datos & BaaS",
    items: ["PostgreSQL", "Supabase", "Firebase", "Prisma"],
    icon: Cloud,
    color: "from-purple-500 to-indigo-500",
  },
  {
    category: "Cloud, IA & DevOps",
    items: ["GCP", "Azure", "Docker", "OpenAI"],
    icon: Brain,
    color: "from-pink-500 to-rose-500",
  },
]

const projectAreas = [
  {
    title: "Gestión inmobiliaria",
    description: "Plataformas web con bases de datos relacionales, automatizaciones, reportes y operación diaria.",
    icon: Database,
  },
  {
    title: "Finanzas & datos sensibles",
    description: "Integraciones con APIs financieras y bureaus de crédito en producción, con monitoreo y control de datos.",
    icon: Shield,
  },
  {
    title: "Producción industrial",
    description: "Sistemas de gestión de producción con predicción de fechas de entrega mediante modelos de machine learning.",
    icon: Boxes,
  },
  {
    title: "Ventas asistidas por IA",
    description: "Agentes conversacionales integrados a flujos comerciales, con captura automática de leads.",
    icon: Bot,
  },
  {
    title: "Integración de sistemas",
    description: "Sincronización incremental entre puntos de venta y plataformas propias para mantener datos operativos al día.",
    icon: Network,
  },
  {
    title: "Automatización financiera",
    description: "Extracción de datos, conexión con clientes y automatización de procesos financieros internos.",
    icon: Cloud,
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-16 sm:py-20 bg-neutral-925">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-100">Mi Experiencia</h2>
          <div className="w-24 h-px bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-6" />
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto">
            Desarrollo de ciclo completo: frontend, backend, datos y despliegue cloud para sistemas que tienen que ser mantenibles, seguros y prácticos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projectAreas.map((area) => {
            const IconComponent = area.icon
            return (
              <div key={area.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                    <IconComponent className="text-cyan-300" size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-100 mb-2">{area.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <div key={index} className="group">
                <div className="rounded-2xl p-6 border border-white/10 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">{skill.category}</h3>
                  <div className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${skill.color}`} />
                        <span className="text-slate-400 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
