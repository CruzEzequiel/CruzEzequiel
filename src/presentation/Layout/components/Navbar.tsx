import { useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { NAV_ITEMS, NAV_LABELS } from "./navItems"

interface NavbarProps {
  isScrolled: boolean
  activeSection: string
  mobileMenuOpen: boolean
  onToggleMobileMenu: () => void
  onCloseMobileMenu: () => void
  onNavigate: (sectionId: string) => void
}

export default function Navbar({
  isScrolled,
  activeSection,
  mobileMenuOpen,
  onToggleMobileMenu,
  onCloseMobileMenu,
  onNavigate,
}: NavbarProps) {
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(target)
      ) {
        onCloseMobileMenu()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [onCloseMobileMenu])

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${isScrolled
          ? "bg-neutral-900/80 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]"
          : "bg-gradient-to-b from-neutral-950/80 to-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="md:hidden">
              <span className="text-lg font-semibold text-cyan-400">
                Ezequiel Cruz
              </span>
            </div>

            <div className="hidden md:flex space-x-6 justify-end w-full">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => onNavigate(item)}
                  className={`capitalize text-md tracking-wide transition-colors duration-200 ${activeSection === item
                    ? "text-cyan-300"
                    : "text-slate-400 hover:text-cyan-300"
                    }`}
                >
                  {NAV_LABELS[item]}
                </button>
              ))}
            </div>

            <button
              ref={mobileMenuButtonRef}
              className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              onClick={onToggleMobileMenu}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-900/95 border-t border-white/10 overflow-hidden fixed top-[64px] left-0 w-full z-40"
          >
            <div className="px-4 py-4 space-y-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => onNavigate(item)}
                  className={`block w-full text-left py-2 px-3 rounded-lg capitalize ${activeSection === item
                    ? "bg-white/10 text-cyan-300"
                    : "text-slate-300 hover:bg-white/5"
                    }`}
                >
                  {NAV_LABELS[item]}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
