import { useEffect, useState } from "react"

// El PDF vive en public/cv/. Mientras el archivo no exista, los botones de descarga no se muestran.
export const CV_URL = `${import.meta.env.BASE_URL}cv/Ezequiel-Cruz-CV.pdf`

export function useCvAvailable(): boolean {
  const [available, setAvailable] = useState(false)

  useEffect(() => {
    let active = true
    fetch(CV_URL, { method: "HEAD" })
      .then((res) => {
        // En desarrollo, un archivo inexistente devuelve index.html (200): se comprueba el tipo de contenido.
        if (active) setAvailable(res.ok && (res.headers.get("content-type") ?? "").includes("pdf"))
      })
      .catch(() => {
        if (active) setAvailable(false)
      })
    return () => {
      active = false
    }
  }, [])

  return available
}
