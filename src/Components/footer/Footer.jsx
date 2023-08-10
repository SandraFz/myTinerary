import React from "react";
import './Footer.css'

function Footer() {

    return (
        <footer className="d-flex justify-content-between align-items-center p-3 footer">
    <div className="d-flex justify-content-between redes-group">
      <a href="#" className="mx-2 a-redes-logo d-inline-block">
        <img className="rounded-5" src="../../../../public/assets/images/instagram.jpg" alt="Logo instagram"/>
      </a>
      <a href="#" className="mx-2 a-redes-logo d-inline-block">
        <img className="rounded-5" src="../../../../public/assets/images/facebook.jpg" alt="Logo Facebook"/>
      </a>
      <a href="#" className="mx-2 a-redes-logo d-inline-block">
        <img className="rounded-5" src="../../../../public/assets/images/whatsapp.jpg" alt="Logo WhatsApp"/>
      </a>
    </div>
    <h6>
      FE13-TN
    </h6>
  </footer>
    )
}

export default Footer