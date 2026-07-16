import { Bot, Boxes, Cloud, Database, Network, Shield } from "lucide-react"

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
    <section id="expertise" className="py-16 sm:py-20 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-100">Áreas de Proyecto</h2>
          <div className="w-24 h-px bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-6" />
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto">
            Desarrollo de ciclo completo: frontend, backend, datos y despliegue cloud para sistemas que tienen que ser mantenibles, seguros y prácticos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectAreas.map((area) => {
            const IconComponent = area.icon
            return (
              <div key={area.title} className="rounded-lg border border-white/10 bg-white/5 p-5">
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
      </div>
    </section>
  )
}
