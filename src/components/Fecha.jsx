import "../css/fecha.css"
import { useEffect, useRef, useState } from "react"

function Fecha(){

  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

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

  return(

    <section className="fecha" ref={ref}>

      {/* FECHA */}
      <div className={`fecha__container ${visible ? "show" : ""}`}>

        <div className="fecha__col">
          <span>SÁBADO</span>
        </div>

        <div className="fecha__col fecha__center">
          <h2>21</h2>
          <p>JUNIO</p>
        </div>

        <div className="fecha__col">
          <span>5:00 PM</span>
        </div>

      </div>

      {/* UBICACIÓN */}
      <div className={`fecha__ubicacion ${visible ? "show" : ""}`}>
        <p>
          📍 Calle Siglo XXI, Mza 24 lote 8, Fracc. <br />
          El Carmen etapa 3, Tizayuca, Hgo.
        </p>
      </div>

      {/* MAPA */}
      <div className={`fecha__mapa ${visible ? "show" : ""}`}>
        <iframe
          src="https://www.google.com/maps?q=19.8419,-98.9797&z=15&output=embed"
          loading="lazy"
        ></iframe>
      </div>

    </section>

  )

}

export default Fecha