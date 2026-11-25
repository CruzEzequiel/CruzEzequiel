export const NAV_ITEMS = ["home", "about", "expertise", "knowledge", "experience", "portfolio", "contact"] as const

export const NAV_LABELS: Record<(typeof NAV_ITEMS)[number], string> = {
  home: "Inicio",
  about: "Acerca",
  expertise: "Áreas",
  knowledge: "Conocimientos",
  experience: "Trayectoria",
  portfolio: "Portafolio",
  contact: "Contacto",
}
