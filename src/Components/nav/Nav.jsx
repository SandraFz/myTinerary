import React from "react";
import './Nav.css'
import {Link as Anchor} from 'react-router-dom'

function Nav() {

    return (
      <>
      
      <nav class="navbar navbar-dark navbar-expand-md w-100 align-items-top">
        <div className="container-fluid">
          {/*<div className="d-flex align-items-top tittle">*/}
          <a className="navbar-brand tittle" href="#">
            My Itinerary
          </a>
          {/*</div>*/}
          <div className="buttonContainer d-flex flex-column">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           
            <img className="menuItem" src="public/assets/images/menu.png" alt="" />
            </button>
              <div className="collapse navbar-collapse containerUl" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end">
                  <li className="nav-item">
                    <Anchor to="#" className="login">
                      <img className="" src="public/assets/images/perfil-white.png" alt="Login" />
                      Login
                    </Anchor>
                  </li>
                  <li className="nav-item">
                    <Anchor className="nav-link active" aria-current="page" to={'/'}>Home</Anchor>
                  </li>
                  <li className="nav-item">
                    <Anchor className="nav-link" to={'/cities'}>Cities</Anchor>
                  </li>
                </ul>
                
              </div>
            
          
          </div>
          
          
        </div>
      
      </nav>
    
    </>
   )
}

export default Nav