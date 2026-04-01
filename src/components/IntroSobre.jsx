import { useState } from "react"
import sello from "../assets/images/sello-cream.png" // 👈 cambia imagen
import "../css/introSobre.css"

export default function IntroSobre({ onOpen }) {

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
    setTimeout(() => {
      onOpen()
    }, 1200)
  }

  return (
    <div className={`intro ${open ? "open" : ""}`}>

      <div className="envelope">

        <div className="flap"></div>

        <img
          src={sello}
          className="seal"
          onClick={handleClick}
        />

      </div>

      <p className="text">Toca el sello para abrir </p>

    </div>
  )
}