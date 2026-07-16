export const NAV_ITEMS = ["home", "about", "expertise", "knowledge", "experience", "contact"] as const

export const NAV_LABELS: Record<(typeof NAV_ITEMS)[number], string> = {
  home: "Inicio",
  about: "Acerca",
  expertise: "Experiencia",
  knowledge: "Conocimientos",
  experience: "Trayectoria",
  contact: "Contacto",
}
