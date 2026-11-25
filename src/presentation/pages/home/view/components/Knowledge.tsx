import { Brain, Cloud, Code, Database, Server, Shield } from "lucide-react"
import { motion } from "framer-motion"

export default function Knowledge() {
  return (
    <section id="knowledge" className="py-16 sm:py-20 bg-neutral-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-100">Conocimientos</h2>
          <p className="text-slate-400">Stack y prácticas que aplico para construir productos web completos, desde la interfaz hasta producción.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ y: -4 }} className="rounded-lg border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-3 mb-3">
              <Code className="text-slate-100" />
              <h3 className="text-lg font-semibold text-slate-100">Frontend</h3>
            </div>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>React, TypeScript y Vite para interfaces modernas y mantenibles.</li>
              <li>Supabase JS client para autenticación, datos y almacenamiento desde el cliente.</li>
              <li>Componentes pensados para claridad, rendimiento y uso diario.</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="rounded-lg border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-3 mb-3">
              <Server className="text-slate-100" />
              <h3 className="text-lg font-semibold text-slate-100">Backend</h3>
            </div>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>Python con FastAPI para APIs rápidas, claras y documentadas.</li>
              <li>Node.js para servicios y funciones de backend, y Playwright para scrapers y automatización de portales.</li>
              <li>Separación entre rutas, servicios, validación, datos e integraciones.</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="rounded-lg border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-3 mb-3">
              <Database className="text-slate-100" />
              <h3 className="text-lg font-semibold text-slate-100">Datos & BaaS</h3>
            </div>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>PostgreSQL, Supabase, Firebase y MongoDB según el tipo de producto.</li>
              <li>Supabase RLS para reglas de acceso cercanas a la base de datos.</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="rounded-lg border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-3 mb-3">
              <Cloud className="text-slate-100" />
              <h3 className="text-lg font-semibold text-slate-100">Cloud & DevOps</h3>
            </div>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>GCP: Cloud Run, Artifact Registry y Google Cloud Storage.</li>
              <li>Azure: Functions, Blob Storage y Communication Services.</li>
              <li>Railway, Docker y GitHub Actions para despliegues y automatización.</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="rounded-lg border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="text-slate-100" />
              <h3 className="text-lg font-semibold text-slate-100">Auth, Seguridad & Storage</h3>
            </div>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>Firebase Auth, Firebase Identity Platform y Supabase RLS.</li>
              <li>Backblaze B2, GCS y Azure Blob Storage para archivos y activos.</li>
              <li>Linux como entorno de trabajo diario.</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="rounded-lg border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-3 mb-3">
              <Brain className="text-slate-100" />
              <h3 className="text-lg font-semibold text-slate-100">IA & APIs</h3>
            </div>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>OpenAI, Gemini y Anthropic Claude con tool use.</li>
              <li>Integración de modelos en flujos reales, validaciones y automatizaciones.</li>
              <li>Diseño de APIs para conectar servicios externos, datos y notificaciones.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
