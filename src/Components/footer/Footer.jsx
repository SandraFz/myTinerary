import React from "react";
import './Footer.css'
import AnchorList from "../anchorList/AnchorList";
import ArrayList from '../../assets/data/links.json'
import { Link as Anchor } from "react-router-dom";

function Footer() {

    const aList = ArrayList

    return (
        <footer className="d-flex justify-content-between align-items-center p-3 footer">
            <ul className="d-flex justify-content-between redes-group footerMenu">
                {
                    aList.redes.map(elem => {
                        return <Anchor href="#" className="m-1 a-redes-logo d-inline-block">
                        <img className="rounded-5" src={elem.src} alt={elem.alt}/>
                    </Anchor>
                    })
                }
            </ul>
            <ul className="navbar-nav d-flex justify-content-between redes-group footerMenu">
                <AnchorList list={aList.navbar}/>
            </ul>
        </footer>
    )
}

export default Footer