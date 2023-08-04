import React from "react";
import './Nav.css'

function Nav() {

    return (
      <>
      
      <nav class="navbar navbar-dark navbar-expand-md w-100">
        <div className="container-fluid containerTittle">
          <a className="text-decoration-none tittle" href="#">
            My Itinerary
          </a>
          <div className=" w-100">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           
            <img className="" src="public/assets/images/menu.png" alt="" />
            </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end">
                  <li className="nav-item">
                    <a href="" className="login">
                      <img className="w-50" src="public/assets/images/perfil-white.png" alt="Login" />
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Cities</a>
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