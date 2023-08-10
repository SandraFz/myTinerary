import React from "react";
import './Footer.css'
import AnchorList from "../anchorList/AnchorList";
import ArrayList from '../../assets/data/links.json'

function Footer() {

    const aList = ArrayList

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
            <ul className="navbar-nav d-flex justify-content-between redes-group footerMenu">
                <AnchorList list={aList.navbar}/>
            </ul>
        </footer>
    )
}

export default Footer