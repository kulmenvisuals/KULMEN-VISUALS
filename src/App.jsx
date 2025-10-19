import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
      <Header />

      {/* El contenido empuja al footer hacia abajo */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}