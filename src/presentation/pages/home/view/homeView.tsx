import Hero from "./components/Hero"
import About from "./components/About"
import Expertise from "./components/Expertise"
import Knowledge from "./components/Knowledge"
import Experience from "./components/Experience"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"

export default function HomeView() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <Hero onNavigate={scrollToSection} />
      <About />
      <Expertise />
      <Knowledge />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  )
}
