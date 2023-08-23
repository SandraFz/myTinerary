import React from "react";
import './Nav.css'
import AnchorList from "../anchorList/AnchorList";
import {Link as Anchor} from 'react-router-dom'
import ArrayList from '../../assets/data/links.json'

function Nav() {

const aList = ArrayList.navbar

    return (
      <>
      <header>
        
      
      <nav class="navbar navbar-dark navbar-expand-md w-100 align-items-top">
        <div className="container-fluid container1">
        
          <a className="navbar-brand tittle" href="#">
            My Itinerary
          </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           
            <img className="menuItem" src="/assets/images/menu.png" alt="" />
            </button>
         
          <div className="buttonContainer">
          
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end">
                  <AnchorList list={aList}>
                        <Anchor to="#" className="button">
                          <img className="" src="/assets/images/perfil-white.png" alt="Login" />
                          Login
                        </Anchor>
                  </AnchorList>
                </ul>
                
              </div>
            
          </div>
          
        </div>
      
      </nav>
      </header>
    </>
   )
}

export default Nav