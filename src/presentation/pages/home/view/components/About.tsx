export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-neutral-900">Acerca de Mí</h2>
          <div className="w-24 h-px bg-cyan-500 mx-auto mb-6" />
        </div>

        <div className="space-y-6">
          <p className="text-lg text-slate-600 leading-relaxed">
            Soy Full Stack Developer enfocado en construir sistemas web bien estructurados y fáciles de usar.
            Trabajo sobre todo en soluciones que ordenan procesos, conectan servicios y reducen carga operativa.
          </p>

          <p className="text-lg text-slate-600 leading-relaxed">
            He desarrollado plataformas de gestión inmobiliaria, sistemas para manufactura industrial y soluciones financieras,
            integrando APIs externas, bureaus de crédito, notificaciones, análisis de datos, reportes y flujos de automatización.
            Cuido la arquitectura: capas bien separadas, APIs RESTful documentadas y despliegue en la nube con GCP y Azure.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="text-center p-5 bg-slate-50 rounded-lg border border-slate-100">
              <div className="text-3xl font-bold text-cyan-600 mb-1">4+</div>
              <div className="text-slate-600 font-medium">Años de Experiencia</div>
            </div>
            <div className="text-center p-5 bg-slate-50 rounded-lg border border-slate-100">
              <div className="text-3xl font-bold text-cyan-600 mb-1">7+</div>
              <div className="text-slate-600 font-medium">Servicios desplegados en la nube</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
