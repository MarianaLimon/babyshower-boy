import "../css/confirmacion.css"
import { FaWhatsapp } from "react-icons/fa"
import { useState, useEffect, useRef } from "react"

function Confirmacion(){

  const [respuesta, setRespuesta] = useState(null)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
          setVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if(ref.current){
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const telefono = "5215512345678"

  const mensajeSi = encodeURIComponent(
    "Hola! Confirmo mi asistencia al Baby Shower 🐰💖"
  )

  const mensajeNo = encodeURIComponent(
    "Hola! No podré asistir, pero les deseo lo mejor 💖"
  )

  return(

    <section 
      className={`confirmacion ${visible ? "show" : ""}`} 
      ref={ref}
    >

      <h2 className="confirmacion__title fade delay-1">
        ¿Podrás acompañarme?
      </h2>

      <p className="confirmacion__text fade delay-2">
        Me encantará celebrar contigo este momento tan especial.
      </p>

      {/* OPCIONES */}
      {respuesta === null && (
        <div className="confirmacion__buttons fade delay-3">

          <button 
            className="btn yes"
            onClick={() => setRespuesta("si")}
          >
            <span className="ico-yes">✔</span> Sí puedo asistir
          </button>

          <button 
            className="btn no"
            onClick={() => setRespuesta("no")}
          >
            ✖ No puedo asistir
          </button>

        </div>
      )}

      {/* SI */}
      {respuesta === "si" && (
        <div className="confirmacion__result">

          <p>¡Qué alegría! Confirma aquí:</p>

          <a
            href={`https://wa.me/${telefono}?text=${mensajeSi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn whatsapp pulse"
          >
            <FaWhatsapp className="icon" />
            Confirmar por WhatsApp
          </a>

          <button 
            className="btn secondary"
            onClick={() => setRespuesta(null)}
          >
            ↺ Cambiar respuesta
          </button>

        </div>
      )}

      {/* NO */}
      {respuesta === "no" && (
        <div className="confirmacion__result">

          <p>
            Gracias por avisar 💕 <br />
            Puedes enviarnos un mensajito:
          </p>

          <a
            href={`https://wa.me/${telefono}?text=${mensajeNo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn whatsapp pulse"
          >
            <FaWhatsapp className="icon" />
            Enviar mensaje
          </a>

          <button 
            className="btn secondary"
            onClick={() => setRespuesta(null)}
          >
            ↺ Cambiar respuesta
          </button>

        </div>
      )}

    </section>

  )

}

export default Confirmacion