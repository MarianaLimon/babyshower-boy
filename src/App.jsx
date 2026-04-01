import "./css/global.css"
import useProteccion from "./hooks/useProteccion"
import IntroSobre from "./components/IntroSobre"
import Hero from "./components/Hero"
import Fecha from "./components/Fecha"
import Confirmacion from "./components/Confirmacion"
import MesaRegalos from "./components/MesaRegalos"
import Footer from "./components/Footer"
import conejita from "./assets/images/oso.png"
import { useEffect, useState } from "react"

function App(){
  // useProteccion()

  const [scrolled, setScrolled] = useState(false)
  const [opened, setOpened] = useState(false) // 👈 NUEVO

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return(
    <>
      <div className="bg"></div>

      <img 
        src={conejita} 
        alt="conejita"
        className={`bunny ${scrolled ? "small" : ""}`} 
      />

      {/* 👇 INTRO */}
      {!opened && (
        <IntroSobre onOpen={() => setOpened(true)} />
      )}

      {/* 👇 CONTENIDO */}
      {opened && (
        <>
          <Hero />
          <Fecha />
          <Confirmacion />
          <MesaRegalos />
          <Footer />
        </>
      )}

    </>
  )
}

export default App