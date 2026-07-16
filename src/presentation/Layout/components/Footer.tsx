export default function Footer() {
  return (
    <footer className="py-6 bg-neutral-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Ezequiel Cruz. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
