import "../css/footer.css"
import { FaWhatsapp } from "react-icons/fa"

function Footer(){

  return(

    <footer className="footer">

      <div className="footer__content">

        <p className="footer__text">
          <a href="https://invitacioneslimon.com/" target="blank" className="alimon">invitacioneslimon.com</a>
        </p>

        <a
          href="https://wa.me/525646015811"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__whatsapp"
        >
          <FaWhatsapp />
        </a>

      </div>

    </footer>

  )

}

export default Footer