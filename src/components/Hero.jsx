import "../css/hero.css"

function Hero(){

  return(

    <section className="hero">

      <div className="hero__content">

        <p className="hero__mi fade-in delay-1">Mi</p>

        <h1 className="hero__title fade-in delay-2">
          Baby <span>Shower</span>
        </h1>

        <h2 className="hero__name fade-in delay-3">Santiago</h2>

        <p className="hero__subtitle fade-in delay-4">
          Acompáñanos a celebrar la llegada <br /> de nuestro pequeño
        </p>

        <div className="scroll-indicator">
            <span>﹀</span>
        </div>

      </div>

    </section>

  )

}

export default Hero