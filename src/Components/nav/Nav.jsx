import React from "react";
import './Nav.css'

function Nav() {

    return (
      <>
      
      <nav class="navbar navbar-expand-lg w-100">
        <div className="container-fluid containerTittle">
          <a className="text-decoration-none" href="#">
            My Itinerary
          </a>
          <div className=" d-flex flex-row-reverse">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cities</a>
              </li>
            </ul>
            
          </div>
          
          <input type="submit" value="login" />
          </div>
          
          
        </div>
      
      </nav>
    
    </>
   )
}

export default Nav