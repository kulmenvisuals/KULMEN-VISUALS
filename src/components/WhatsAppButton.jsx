// src/components/WhatsAppButton.jsx
import { MessageCircle } from "lucide-react"

const phone = "34652405654"
const message = "Hola io, me gustaría hablar sobre un proyecto para mi marca."
const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

export default function WhatsAppButton() {
  function handleClick() {
    if (typeof window.fbq === "function") {
      window.fbq("track", "Contact", {
        content_name: "WhatsApp flotante",
      })
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
      aria-label="Abrir chat de WhatsApp con Kulmen Visuals"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full
        bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)]
        transition duration-200 hover:scale-105 hover:bg-[#1FBE5B] active:scale-95
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]
        focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2} aria-hidden="true" />
    </a>
  )
}
