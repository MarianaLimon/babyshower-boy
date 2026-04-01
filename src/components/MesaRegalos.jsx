import "../css/mesa.css"

function MesaRegalos(){

  return(

    <section className="mesa">

      <h2 className="mesa__title">
        Mesa de Regalos
      </h2>

      <p className="mesa__text">
        Tu presencia es lo más importante 💖 <br />
        pero si deseas hacernos un obsequio,
        puedes encontrar algunas opciones aquí:
      </p>

      <div className="mesa__buttons">

        <a 
          href="https://www.amazon.com.mx" 
          target="_blank"
          rel="noopener noreferrer"
          className="btn gift fade-blur delay-1"
        >
          amazon
        </a>

        <a 
          href="https://www.liverpool.com.mx" 
          target="_blank"
          rel="noopener noreferrer"
          className="btn gift fade-blur delay-2"
        >
          Liverpool
        </a>

        <a 
          href="https://www.mercadolibre.com.mx" 
          target="_blank"
          rel="noopener noreferrer"
          className="btn gift fade-blur delay-3"
        >
          mercado libre
        </a>

      </div>

    </section>

  )

}

export default MesaRegalos