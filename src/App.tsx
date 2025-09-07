import { useState, useEffect, useRef } from "react"
import {
  ChevronDown,
  Mail,
  Linkedin,
  Github,
  Code,
  ExternalLink,
  GithubIcon,
  LinkedinIcon,
  MapPin,
  Menu,
  X,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function PersonalPortfolio() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Secciones actualizadas
      const sections = ["home", "architecture", "expertise", "knowledge", "experience", "about", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cerrar menú móvil al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false) // Cerrar menú al navegar
  }

  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Vite", "JavaScript"],
      icon: Code,
      color: "from-cyan-500 to-blue-500",
    },
    {
      category: "Backend",
      items: ["Python", "C++", "API Design", "Serverless"],
      icon: Database,
      color: "from-emerald-500 to-teal-500",
    },
    {
      category: "Cloud & DevOps",
      items: ["Google Cloud", "Azure", "Docker", "Cloud Run"],
      icon: Cloud,
      color: "from-purple-500 to-indigo-500",
    },
    {
      category: "AI & Data",
      items: ["Gemini API", "ChatGPT", "MySQL", "MongoDB"],
      icon: Brain,
      color: "from-pink-500 to-rose-500",
    },
  ]

  const experiences = [
    {
      title: "Desarrollador Web",
      period: "Enero 2025 - Presente",
      description:
        "Desarrollo de aplicaciones web para el sector financiero, automatizando procesos internos mediante herramientas de software e inteligencia artificial.",
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
        "Soporte especializado en servicios de inteligencia artificial de Azure, incluyendo ChatGPT, Document AI y otras soluciones empresariales en la nube.",
      highlights: ["Azure AI", "ChatGPT", "Document AI", "Soporte técnico"],
      company: "Microsoft",
    },
    {
      title: "Desarrollador Backend",
      period: "",
      description:
        "Desarrollo de microservicios en Python para exponer modelos de IA en Google Cloud Platform, utilizando Docker y gestionando la comunicación y autenticación vía API.",
      highlights: ["Python", "Microservicios", "Google Cloud", "Docker", "APIs seguras"],
      company: "Freelancer",
    },
    {
      title: "Desarrollador Backend",
      period: "",
      description:
        "Diseño, programación y despliegue de una API lista para producción en el sitio web corporativo, empleando Laravel y MySQL.",
      highlights: ["Laravel", "MySQL", "APIs empresariales", "Despliegue en producción"],
      company: "Denoba SAS",
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-950 text-slate-200 selection:bg-cyan-500/20 selection:text-slate-100">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${isScrolled
          ? "bg-neutral-900/80 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]"
          : "bg-gradient-to-b from-neutral-950/80 to-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo/nombre en móvil */}
            <div className="md:hidden">
              <span className="text-lg font-semibold bg-gradient-to-r from-cyan-500 to-sky-400 bg-clip-text text-transparent">
                Ezequiel Cruz
              </span>
            </div>

            {/* Menú desktop */}
            <div className="hidden md:flex space-x-6 justify-end w-full">
              {["home", "architecture", "expertise", "knowledge", "experience", "about", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-md tracking-wide transition-colors duration-200 ${activeSection === item
                    ? "text-cyan-300"
                    : "text-slate-400 hover:text-cyan-300"
                    }`}
                >
                  {item === "home"
                    ? "Inicio"
                    : item === "architecture"
                      ? "Arquitectura"
                      : item === "expertise"
                        ? "Experiencia"
                        : item === "knowledge"
                          ? "Conocimientos"
                          : item === "experience"
                            ? "Trayectoria"
                            : item === "about"
                              ? "Acerca"
                              : "Contacto"}
                </button>
              ))}
            </div>

            {/* Botón de menú móvil */}
            <button
              className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-neutral-900/95 border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-3">
                {["home", "architecture", "expertise", "knowledge", "experience", "about", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`block w-full text-left py-2 px-3 rounded-lg capitalize ${activeSection === item
                      ? "bg-white/10 text-cyan-300"
                      : "text-slate-300 hover:bg-white/5"
                      }`}
                  >
                    {item === "home"
                      ? "Inicio"
                      : item === "architecture"
                        ? "Arquitectura"
                        : item === "expertise"
                          ? "Experiencia"
                          : item === "knowledge"
                            ? "Conocimientos"
                            : item === "experience"
                              ? "Trayectoria"
                              : item === "about"
                                ? "Acerca"
                                : "Contacto"}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero - Ajustado para responsive */}
      <section id="home" className="pt-28 md:pt-32 pb-20 relative overflow-hidden">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-32 w-[40rem] h-[40rem] opacity-20 blur-3xl bg-[radial-gradient(ellipse_at_center,theme(colors.cyan.600),transparent_60%)]" />
          <div className="absolute -bottom-32 -left-24 w-[36rem] h-[36rem] opacity-20 blur-3xl bg-[radial-gradient(ellipse_at_center,theme(colors.indigo.600),transparent_60%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna de texto */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-snug">
              <span className="block bg-gradient-to-r from-cyan-600 to-cyan-300 bg-clip-text text-transparent">
                Ingeniero de Software | Web, Cloud & Data
              </span>
            </h1>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              Construyendo aplicaciones web escalables con React, Node.js y GCP.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="px-5 py-2 rounded-full font-medium shadow-sm bg-gradient-to-r from-cyan-600 to-sky-600 text-white hover:from-cyan-500 hover:to-sky-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 transition"
              >
                Conoce más
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2 rounded-full font-medium border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-slate-300/20 transition"
              >
                Contactar
              </button>
            </div>
          </div>

          {/* Badges & Socials - Ajustado para móvil */}
          <div className="flex flex-col items-center md:items-start space-y-6 mt-6 md:mt-0">
            {/* Tech stack + Arquitectura (Blueprint real) */}
            <ArchitectureShowcase />

            {/* Socials */}
            <div className="flex space-x-4">
              <a href="https://github.com/CruzEzequiel" aria-label="GitHub" target="_blank" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <GithubIcon className="h-5 w-5 text-slate-200" />
              </a>
              <a href="https://linkedin.com/in/CruzEzequiel" aria-label="LinkedIn" target="_blank" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <LinkedinIcon className="h-5 w-5 text-slate-200" />
              </a>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 hover:text-slate-300 transition-colors"
          aria-hidden
        >
          <ChevronDown size={28} />
        </button>
      </section>

      {/* About - Mejorado para responsive */}
      <section id="about" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-neutral-900">Acerca de Mí</h2>
            <div className="w-24 h-px bg-gradient-to-r from-sky-400 to-cyan-500 mx-auto mb-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Columna de texto - Colocada primera en móvil para priorizar contenido */}
            <div className="space-y-6 order-1">
              <p className="text-lg text-slate-600 leading-relaxed">
                Desarrollador Full-Stack especializado en el diseño y construcción de aplicaciones web multisectoriales,
                con un enfoque en la creación de soluciones robustas, seguras y fáciles de usar.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Trabajo con tecnologías modernas como React, TypeScript y Firebase,
                aplicando buenas prácticas de arquitectura para garantizar escalabilidad y mantenibilidad.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                He liderado la implementación de APIs optimizadas y su despliegue en entornos serverless y Kubernetes sobre Google Cloud.
                También cuento con experiencia en la integración de servicios de inteligencia artificial y en el desarrollo de flujos de automatización.
              </p>

              {/* Estadísticas en formato más atractivo */}
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

            {/* Tarjeta de perfil - Responsive y mejor centrada */}
            <div className="relative order-2 mx-auto md:ml-auto md:mr-0" style={{ maxWidth: "340px" }}>
              <div className="w-full h-auto bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-xl border border-slate-100 flex flex-col justify-between p-6 relative z-10">
                <div>
                  <div className="flex items-center mb-3">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-700 to-indigo-700 bg-clip-text text-transparent">
                      Ezequiel Cruz
                    </h3>
                  </div>
                  <p className="text-slate-600 font-medium mb-2">Ingeniero de Software</p>
                  <p className="text-sm text-slate-500 italic mb-4 border-l-2 border-slate-200 pl-3">
                    "Construyo soluciones escalables en la nube con IA y datos"
                  </p>

                  {/* Skills pills - Mejor distribuidos */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="px-2 py-1 text-xs rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200 font-medium">
                      React
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 font-medium">
                      TypeScript
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                      GCP
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-50 text-purple-700 border border-purple-200 font-medium">
                      IA
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
                    {/* Redes sociales */}
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

                  {/* QR code - Ajustado para no salirse de la tarjeta */}
                  <img
                    src="./qr-linkedin.png"
                    alt="Linkedin QR"
                    className="w-16 h-16 absolute bottom-2 right-2 opacity-80 hidden md:block"
                  />
                </div>
              </div>

              {/* Elemento decorativo para añadir profundidad */}
              <div className="absolute -bottom-3 -right-3 w-full h-full bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 rounded-xl -z-10 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise - Ajustado para responsive */}
      <section id="expertise" className="py-16 sm:py-20 bg-neutral-925">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-100">Mi Experiencia</h2>
            <div className="w-24 h-px bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-6" />
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto">
              Desarrollo de ciclo completo (SDLC): de la idea al despliegue, uniendo infraestructura backend con experiencias de usuario excepcionales.
            </p>
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

      {/* Knowledge - Ajustado para responsive */}
      <section id="knowledge" className="py-16 sm:py-20 bg-neutral-950 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-100">Conocimientos</h2>
            <p className="text-slate-400">Stack y prácticas clave que aplico en proyectos reales.</p>
          </div>

          {/* Filtros rápidos - Scrollable en móvil */}
          <div className="flex overflow-x-auto pb-4 mb-6 sm:mb-8 sm:flex-wrap sm:justify-center gap-2 hide-scrollbar">
            {["Kubernetes", "GCP", "Cloud Run", "APIs", "Seguridad", "Terraform", "Observabilidad"].map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedNode(tag.toLowerCase().replace(/\s/g, ""))}
                className={`px-3 py-1 rounded-full text-sm border whitespace-nowrap ${selectedNode === tag.toLowerCase().replace(/\s/g, "") ? "bg-white/10 border-white/20" : "border-white/10 hover:bg-white/5"}`}
              >
                {tag}
              </button>
            ))}
            <button
              onClick={() => setSelectedNode(null)}
              className="px-3 py-1 rounded-full text-sm border border-white/10 hover:bg-white/5 whitespace-nowrap"
            >
              Limpiar
            </button>
          </div>

          {/* Grid de temas - Ajustado para móvil */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Kubernetes */}
            <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3 mb-3">
                <Boxes className="text-slate-100" />
                <h3 className="text-lg font-semibold text-slate-100">Kubernetes (GKE)</h3>
              </div>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>Despliegues, HPA, ConfigMaps/Secrets, Ingress, PodDisruptionBudgets.</li>
                <li>Rollouts canarios/blue-green con salud y readiness probes.</li>
                <li>Autenticación Workload Identity y políticas de red.</li>
              </ul>
            </motion.div>
            {/* GCP / Cloud Run */}
            <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3 mb-3">
                <Cloud className="text-slate-100" />
                <h3 className="text-lg font-semibold text-slate-100">GCP & Cloud Run</h3>
              </div>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>Servicios serverless con escalado a cero y revisiones versionadas.</li>
                <li>VPC Connectors, Pub/Sub triggers, Cloud SQL Auth Proxy.</li>
                <li>CDN, WAF y políticas de seguridad en el borde.</li>
              </ul>
            </motion.div>
            {/* APIs */}
            <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3 mb-3">
                <Network className="text-slate-100" />
                <h3 className="text-lg font-semibold text-slate-100">Diseño de APIs</h3>
              </div>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>REST/GraphQL, OpenAPI, versionado y breaking-changes safe.</li>
                <li>Rate limiting, idempotencia, retrys y circuit breakers.</li>
                <li>Observabilidad por endpoint y SLOs.</li>
              </ul>
            </motion.div>
            {/* Seguridad */}
            <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-slate-100" />
                <h3 className="text-lg font-semibold text-slate-100">Seguridad</h3>
              </div>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>IAM de mínimo privilegio, OAuth2/OIDC, tokens con claims.</li>
                <li>KMS, rotación de credenciales, gestión de secretos por entorno.</li>
                <li>Threat modeling básico y hardening de contenedores.</li>
              </ul>
            </motion.div>
            {/* Terraform */}
            <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3 mb-3">
                <TerminalSquare className="text-slate-100" />
                <h3 className="text-lg font-semibold text-slate-100">Terraform (IaC)</h3>
              </div>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>Módulos reutilizables, workspaces por entorno y plan/apply seguro.</li>
                <li>Validaciones, policy as code (OPA), state remoto en GCS.</li>
                <li>Integración CI/CD con validaciones y revisiones.</li>
              </ul>
            </motion.div>
            {/* Observabilidad */}
            <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3 mb-3">
                <Brain className="text-slate-100" />
                <h3 className="text-lg font-semibold text-slate-100">Observabilidad</h3>
              </div>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>Logs estructurados, métricas de negocio y latencia p95/p99.</li>
                <li>Tracing distribuido y paneles de salud por servicio.</li>
                <li>Alertas orientadas a usuario (error budget / SLO burn rate).</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience - Ajustado para responsive */}
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
                    <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg p-4 border-l-4 border-cyan-500">
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

      {/* Contact - Ajustado para responsive */}
      <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-neutral-950 to-neutral-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">¡Colaboremos!</h2>
            <div className="w-24 h-px bg-gradient-to-r from-cyan-400 to-sky-400 mx-auto mb-6" />
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Abierto a proyectos que involucren cloud, IA/ML y soluciones web end‑to‑end.
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
            <p className="text-slate-400">¡Construyamos algo increíble juntos!</p>
          </div>
        </div>
      </section>

      {/* Footer simple - Añadido para completar la página */}
      <footer className="py-6 bg-neutral-950 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Ezequiel Cruz. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
import React from "react";
import {
  Shield,
  Network,
  KeyRound,
  Server,
  Boxes,
  Database,
  TerminalSquare,
  Brain,
  Cloud,
  Globe2,
  Bot,
  Files,
  FileDown,
  Cable,
  Layers,
} from "lucide-react";

// Arquitectura genérica y funcional para portada (cloud-agnostic).
// Mantiene foco en prácticas sólidas y piezas comunes sin acoplar a un proyecto.
// Tecnologías se presentan como ejemplos intercambiables (GCP/AWS/Azure, Auth0/OIDC, S3/GCS/Blob, etc.).

export function ArchitectureShowcase() {
  // Definición de tipo mínima para evitar problemas TS con JSX namespace
  type Icon = (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;

  // Clusters (nodos) por dominios: client, edge, api, auth, storage, realtime, queue, db, ai, docs, iac, runtime, observability, cloud, orchestration
  const clusters: Array<{
    id: string;
    title: string;
    icon: Icon;
    hue: string; // tailwind gradient from-to
    bullets: string[];
    x: number;
    y: number;
  }> = [
      {
        id: "client",
        title: "Frontend",
        icon: (p) => <Globe2 {...p} />,
        hue: "from-cyan-500 to-sky-500",
        bullets: [
          "React + TypeScript (Vite/Next)",
          "Rutas protegidas (OIDC)",
          "WebSockets/Server-Sent Events",
        ],
        x: 70,
        y: 70,
      },
      {
        id: "edge",
        title: "Edge / WAF / CDN",
        icon: (p) => <Shield {...p} />,
        hue: "from-emerald-500 to-teal-500",
        bullets: ["OWASP ruleset", "CDN + cache por ruta", "Security headers"],
        x: 260,
        y: 50,
      },
      {
        id: "api",
        title: "APIs (BFF / Microservicios)",
        icon: (p) => <Network {...p} />,
        hue: "from-blue-500 to-indigo-500",
        bullets: [
          "OpenAPI + versionado",
          "Idempotencia + rate limit",
          "Canary / Blue-Green",
        ],
        x: 450,
        y: 50,
      },
      {
        id: "auth",
        title: "Auth / Identity",
        icon: (p) => <KeyRound {...p} />,
        hue: "from-teal-500 to-cyan-500",
        bullets: [
          "OIDC (Auth0 / Cognito / Identity Platform)",
          "RBAC con claims",
          "Verificación de token en gateway/middleware",
        ],
        x: 640,
        y: 50,
      },
      {
        id: "storage",
        title: "Object Storage",
        icon: (p) => <Files {...p} />,
        hue: "from-amber-500 to-yellow-500",
        bullets: [
          "Signed URLs (upload/download)",
          "Estructura de carpetas + versionado",
          "Metadatos + lifecycle (retención)",
        ],
        x: 70,
        y: 210,
      },
      {
        id: "realtime",
        title: "Tiempo Real",
        icon: (p) => <Cable {...p} />,
        hue: "from-lime-500 to-green-500",
        bullets: [
          "Rooms/canales por recurso",
          "Progreso de procesos",
          "Notificaciones de estado",
        ],
        x: 260,
        y: 210,
      },
      {
        id: "queue",
        title: "Eventos / Colas",
        icon: (p) => <Boxes {...p} />,
        hue: "from-yellow-500 to-amber-500",
        bullets: ["Procesos asíncronos", "Retries + DLQ", "Outbox / Event-driven"],
        x: 450,
        y: 210,
      },
      {
        id: "db",
        title: "Datos (SQL/NoSQL)",
        icon: (p) => <Database {...p} />,
        hue: "from-pink-500 to-rose-500",
        bullets: [
          "PostgreSQL / MySQL / DocumentDB",
          "Índices + transacciones",
          "Backups / PITR",
        ],
        x: 640,
        y: 210,
      },
      {
        id: "ai",
        title: "IA / ML",
        icon: (p) => <Bot {...p} />,
        hue: "from-violet-500 to-fuchsia-500",
        bullets: ["OCR + extracción", "Validación JSON + reintentos", "RAG / Analítica"],
        x: 260,
        y: 370,
      },
      {
        id: "docs",
        title: "Documentos & Reportes",
        icon: (p) => <FileDown {...p} />,
        hue: "from-sky-500 to-indigo-500",
        bullets: ["PDF (ReportLab/LaTeX)", "XLSX (utilidades)", "Plantillas reutilizables"],
        x: 450,
        y: 370,
      },
      {
        id: "iac",
        title: "IaC & Contenedores",
        icon: (p) => <TerminalSquare {...p} />,
        hue: "from-slate-500 to-gray-500",
        bullets: ["Terraform módulos", "Docker multi-stage", "State remoto"],
        x: 70,
        y: 370,
      },
      {
        id: "runtime",
        title: "Runtime (Containers)",
        icon: (p) => <Server {...p} />,
        hue: "from-indigo-500 to-violet-500",
        bullets: ["Autoscaling a 0", "Zero-downtime rollouts", "Red privada/VPC"],
        x: 640,
        y: 370,
      },
      {
        id: "observ",
        title: "Observabilidad",
        icon: (p) => <Brain {...p} />,
        hue: "from-fuchsia-500 to-pink-500",
        bullets: ["Logs estructurados", "Métricas p95/p99 + SLOs", "Tracing distribuido"],
        x: 450,
        y: 450,
      },
      {
        id: "cloud",
        title: "Plataforma Cloud",
        icon: (p) => <Cloud {...p} />,
        hue: "from-cyan-500 to-blue-500",
        bullets: ["VPC / Subnets / FW", "Service Accounts/IAM", "Artifact Registry"],
        x: 260,
        y: 450,
      },
      {
        id: "orchestrator",
        title: "Orquestación de Flujos",
        icon: (p) => <Layers {...p} />,
        hue: "from-rose-500 to-orange-500",
        bullets: ["Pipelines: input → IA → validación", "Reglas por etapa", "Reprocesos controlados"],
        x: 70,
        y: 450,
      },
    ];

  // Conexiones (aristas) genéricas
  const edges: Array<[string, string]> = [
    ["client", "edge"],
    ["edge", "api"],
    ["api", "auth"],
    ["api", "storage"],
    ["client", "db"],
    ["api", "queue"],
    ["queue", "api"], // callbacks/completions
    ["client", "realtime"],
    ["realtime", "api"],
    ["storage", "ai"],
    ["ai", "docs"],
    ["docs", "storage"],
    ["iac", "runtime"],
    ["iac", "db"],
    ["iac", "storage"],
    ["cloud", "runtime"],
    ["cloud", "db"],
    ["cloud", "storage"],
    ["observ", "api"],
    ["observ", "runtime"],
    ["orchestrator", "ai"],
    ["orchestrator", "queue"],
  ];

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 md:p-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 sm:gap-3 opacity-90">
          {/* Íconos de referencia - Reducidos en móvil */}
          <img src="./react.svg" alt="React" className="h-5 sm:h-6 w-auto" />
          <img src="./typescript.svg" alt="TypeScript" className="h-5 sm:h-6 w-auto" />
          <img src="./docker.svg" alt="Docker" className="h-5 sm:h-6 w-auto" />
          <img src="./terraform.svg" alt="Terraform" className="hidden sm:block h-5 sm:h-6 w-auto" />
          <img src="./gcloud.svg" alt="Cloud" className="hidden sm:block h-5 sm:h-6 w-auto" />
          <img src="./kubernetes.svg" alt="Kubernetes" className="h-5 sm:h-6 w-auto" />
        </div>
      </div>

      <div className="relative w-full overflow-auto">
        {/* En móvil mostramos una versión simplificada */}
        <div className="block sm:hidden text-center py-3">
          <p className="text-slate-300 text-sm mb-3">Arquitectura cloud-native para aplicaciones modernas</p>
          <div className="grid grid-cols-3 gap-3">
            {/* Versión móvil simplificada */}
            {[
              { title: "Frontend", icon: Globe2, color: "from-cyan-500 to-sky-500" },
              { title: "API/BFF", icon: Network, color: "from-blue-500 to-indigo-500" },
              { title: "Cloud", icon: Cloud, color: "from-cyan-500 to-blue-500" },
              { title: "Auth", icon: KeyRound, color: "from-teal-500 to-cyan-500" },
              { title: "Data", icon: Database, color: "from-pink-500 to-rose-500" },
              { title: "IA/ML", icon: Bot, color: "from-violet-500 to-fuchsia-500" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-2`}>
                  <item.icon className="text-white w-5 h-5" />
                </div>
                <span className="text-[10px] text-slate-300">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Versión desktop completa */}
        <svg viewBox="0 0 800 520" className="w-full min-w-[760px] hidden sm:block" role="img" aria-label="Diagrama de arquitectura genérica">
          {/* Edges */}
          {edges.map(([a, b], i) => {
            const A = clusters.find((c) => c.id === a)!;
            const B = clusters.find((c) => c.id === b)!;
            return (
              <line
                key={`edge-${i}-${a}-${b}`}
                x1={A.x}
                y1={A.y}
                x2={B.x}
                y2={B.y}
                stroke="rgba(255,255,255,0.25)"
                strokeWidth={2}
                markerEnd="url(#arrow)"
              />
            );
          })}

          {/* Arrow marker */}
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="rgba(255,255,255,0.35)" />
            </marker>
          </defs>

          {/* Nodes */}
          {clusters.map((c) => (
            <g key={c.id}>
              {/* halo */}
              <circle cx={c.x} cy={c.y} r="36" className="fill-white/[0.06]" />
              {/* body */}
              <circle cx={c.x} cy={c.y} r="28" className={`fill-transparent stroke-white/20`} />
              {/* icon */}
              <foreignObject x={c.x - 18} y={c.y - 18} width="36" height="36">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-white/10 to-white/0 border border-white/10">
                  <c.icon className="text-white/90 w-4 h-4" />
                </div>
              </foreignObject>

              {/* label */}
              <foreignObject x={c.x - 100} y={c.y + 22} width="200" height="110">
                <div className="text-center">
                  <div
                    className={`inline-block text-[11px] px-2 py-0.5 rounded-full bg-gradient-to-r ${c.hue} text-white shadow-sm`}
                  >
                    {c.title}
                  </div>
                  <div className="mt-2 text-[11px] text-slate-300/90 leading-5 bg-white/5 border border-white/10 rounded-md px-2 py-2 opacity-0 hover:opacity-100 transition-opacity">
                    <ul className="text-left list-disc list-inside space-y-0.5">
                      {c.bullets.map((b, i) => (
                        <li key={`${c.id}-b-${i}`}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </foreignObject>
            </g>
          ))}
        </svg>
      </div>

    </div>
  );
}
