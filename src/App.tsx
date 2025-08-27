import { useState, useEffect } from "react"
import {
  ChevronDown,
  Mail,
  Linkedin,
  Github,
  Code,
  Database,
  Cloud,
  Brain,
  ExternalLink,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react"

export default function PersonalPortfolio() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["home", "about", "expertise", "experience", "contact"]
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

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
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
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-end items-center">
            <div className="hidden md:flex space-x-6">
              {["home", "about", "expertise", "experience", "contact"].map((item) => (
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
                    : item === "about"
                      ? "Acerca"
                      : item === "expertise"
                        ? "Experiencia"
                        : item === "experience"
                          ? "Trayectoria"
                          : "Contacto"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pt-28 md:pt-32 pb-20 relative overflow-hidden">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-32 w-[40rem] h-[40rem] opacity-20 blur-3xl bg-[radial-gradient(ellipse_at_center,theme(colors.cyan.600),transparent_60%)]" />
          <div className="absolute -bottom-32 -left-24 w-[36rem] h-[36rem] opacity-20 blur-3xl bg-[radial-gradient(ellipse_at_center,theme(colors.indigo.600),transparent_60%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna de texto */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-snug">
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

          {/* Badges & Socials */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            {/* Tech stack */}
            <div className="flex flex-wrap gap-5 opacity-90">
              <img src="/react.svg" alt="React" className="h-8 w-auto" />
              <img src="/typescript.svg" alt="TypeScript" className="h-8 w-auto" />
              <img src="/firebase.svg" alt="Firebase" className="h-8 w-auto" />
              <img src="/gcp.svg" alt="GCP" className="h-8 w-auto" />
            </div>

            {/* Socials */}
            <div className="flex space-x-4">
              <a href="https://github.com/CruzEzequiel" aria-label="GitHub" target="_blank" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <GithubIcon className="h-5 w-5 text-slate-200" />
              </a>
              <a href="https://linkedin.com/in/CruzEzequiel" aria-label="LinkedIn" target="_blank" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <LinkedinIcon className="h-5 w-5 text-slate-200" />
              </a>
              <a href="https://twitter.com/CruzEzequiel" aria-label="Twitter" target="_blank" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <TwitterIcon className="h-5 w-5 text-slate-200" />
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

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">Acerca de Mí</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Soy Ezequiel Cruz, Desarrollador Full-Stack especializado en el diseño y construcción de aplicaciones web multisectoriales,
                con un enfoque en la creación de soluciones robustas, seguras y fáciles de usar. Trabajo con tecnologías modernas como React, TypeScript y Firebase,
                aplicando buenas prácticas de arquitectura para garantizar escalabilidad y mantenibilidad.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mt-4">
                He liderado la implementación de APIs optimizadas y su despliegue en entornos serverless y Kubernetes sobre Google Cloud.
                También cuento con experiencia en la integración de servicios de inteligencia artificial y en el desarrollo de flujos de automatización para
                procesos documentales y validación de datos, ayudando a las organizaciones a mejorar la eficiencia operativa y la toma de decisiones.
              </p>


              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-600">3+</div>
                  <div className="text-slate-600">Años de Experiencia</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-3xl font-bold text-emerald-600">5+</div>
                  <div className="text-slate-600">Proyectos de impacto</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-slate-600 to-slate-500 shadow-lg flex items-center justify-center">
                <div className="w-80 h-64 bg-white rounded-xl shadow-xl border border-slate-200 flex flex-col justify-between p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-700 mb-1">Ezequiel Cruz</h3>
                    <p className="text-slate-600 font-medium mb-2">Ingeniero de Software</p>
                    <p className="text-sm text-slate-500 mb-4">Full-Stack | Cloud | IA & Datos</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-2">cruzezequiel017@gmail.com</p>
                    <div className="flex space-x-3">
                      <a href="https://github.com/CruzEzequiel" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-600">
                        <GithubIcon className="w-5 h-5" />
                      </a>
                      <a href="https://linkedin.com/in/CruzEzequiel" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-600">
                        <LinkedinIcon className="w-5 h-5" />
                      </a>
                      <a href="mailto:cruzezequiel017@gmail.com" className="text-slate-400 hover:text-cyan-600">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <div className="text-right text-xs text-slate-400 mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-20 bg-neutral-925">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">Mi Experiencia</h2>
            <div className="w-24 h-px bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-6" />
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Desarrollo de ciclo completo (SDLC): de la idea al despliegue, uniendo infraestructura backend con experiencias de usuario excepcionales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Experience */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">Trayectoria Profesional</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row gap-8 items-start">
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

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-br from-neutral-950 to-neutral-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">¡Colaboremos!</h2>
            <div className="w-24 h-px bg-gradient-to-r from-cyan-400 to-sky-400 mx-auto mb-6" />
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Abierto a proyectos que involucren cloud, IA/ML y soluciones web end‑to‑end.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:cruzezequiel017@gmail.com"
              className="group rounded-2xl p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-1">Email</h3>
              <p className="text-slate-300 text-sm">cruzezequiel017@gmail.com</p>
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
    </div>
  )
}
