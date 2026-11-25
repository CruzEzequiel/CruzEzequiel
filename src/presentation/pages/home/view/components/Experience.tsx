const experiences = [
  {
    title: "Full Stack Developer - AI Oriented",
    period: "Octubre 2025 - Actualidad",
    description:
      "Desarrollo full stack orientado a productos con inteligencia artificial, integrando frontend, backend, datos, APIs y servicios cloud en entornos remotos de trabajo.",
    highlights: [
      "Full Stack",
      "Inteligencia artificial",
      "APIs",
      "Cloud",
      "Trabajo remoto",
      "Jornada completa",
    ],
    company: "Dataframe AI",
  },
  {
    title: "Desarrollador Web",
    period: "Enero 2025 - Actualidad",
    description:
      "Desarrollo de sistemas web para el sector financiero, automatizando procesos internos e integrando servicios externos, datos e inteligencia artificial.",
    highlights: [
      "Google Cloud",
      "Servicios financieros",
      "Bases de datos",
      "Firebase",
      "Diseño de aplicaciones web",
      "Inteligencia artificial",
    ],
    company: "Freelancer",
  },
  {
    title: "Ingeniero de Soporte en Servicios de Azure AI",
    period: "Julio 2023 - Diciembre 2024",
    description:
      "Soporte especializado en servicios empresariales de inteligencia artificial en Azure, incluyendo ChatGPT, Document AI e integraciones cloud para clientes.",
    highlights: ["Azure AI", "ChatGPT", "Document AI", "Soporte técnico"],
    company: "Soporte a Microsoft · vía empresa contratista",
  },
  {
    title: "Desarrollador Backend",
    period: "Diciembre 2021 - Julio 2022",
    description:
      "Desarrollo de microservicios en Python para exponer modelos de IA en Google Cloud Platform, utilizando Docker y gestionando comunicación, autenticación e integración vía API.",
    highlights: ["Python", "Microservicios", "Google Cloud", "Docker", "APIs seguras"],
    company: "Freelancer",
  },
  {
    title: "Desarrollador Backend",
    period: "Febrero 2021 - Agosto 2021",
    description:
      "Estancia profesional: backend de un sitio web corporativo y de una aplicación web, con API lista para producción en Laravel y autenticación con Sanctum, y una app móvil con Flutter. Incluyó integración con WhatsApp Business.",
    highlights: ["Laravel", "Sanctum", "Flutter", "MySQL", "WhatsApp Business", "Despliegue en producción"],
    company: "Denoba SAS · Estancia profesional",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-neutral-900">Trayectoria Profesional</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-cyan-500">
                    <div className="text-sm text-cyan-600 font-semibold">{exp.period}</div>
                    <div className="text-xl font-bold text-slate-800">{exp.title}</div>
                    <div className="text-slate-500">{exp.company}</div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-slate-600 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <span key={hIndex} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
