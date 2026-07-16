import { useEffect, useState, type ReactNode } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { NAV_ITEMS } from "./components/navItems"

export default function MainLayout({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>(NAV_ITEMS[0])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const current = NAV_ITEMS.find((section) => {
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
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setTimeout(() => setMobileMenuOpen(false), 400)
    } else {
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-slate-200 selection:bg-cyan-500/20 selection:text-slate-100">
      <Navbar
        isScrolled={isScrolled}
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((open) => !open)}
        onCloseMobileMenu={() => setMobileMenuOpen(false)}
        onNavigate={scrollToSection}
      />
      {children}
      <Footer />
    </div>
  )
}
