import React from "react";
import './Nav.css'
import AnchorList from "../anchorList/AnchorList";
import {Link as Anchor} from 'react-router-dom'
import ArrayList from '../../assets/data/links.json'
import logo from '../../assets/img/brand-mytinerary.png'
import hamburguer from '../../assets/img/menu-white.png'

function Nav() {

const aList = ArrayList.navbar

    return (
      <>
        <header>
          <nav class="navbar navbar-dark navbar-expand-md w-100 align-items-top">
            <div className="container-fluid container1">
              
              <div className="divLogo w-75">
                <img src={logo} alt="" />
              </div>
                
              <div className="divLinks w-25">

              < button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <img className="menuItem" src={"/assets/images/menu.png"} alt="" />
              </button>
              

              </div>  

            </div>
            <div className="buttonContainer">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex w-100">
                    <AnchorList list={aList}>
                      <Anchor to="#" className="button">
                        <img className="" src="/assets/images/perfil-white.png" alt="Login" />
                        Login
                      </Anchor>
                    </AnchorList>
                  </ul>
                </div>
              </div>
          </nav>
        </header>
      </>
   )     
}

export default Nav