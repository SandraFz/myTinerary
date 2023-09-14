import React, { useEffect, useState } from "react";
import './Nav.css'
import AnchorList from "../anchorList/AnchorList";
import {Link as Anchor} from 'react-router-dom'
import ArrayList from '../../assets/data/links.json'
import logo from '../../../public/assets/images/brand-mytinerary-reducido.png'
import hamburguer from '../../assets/img/menu-white.png'
import SingUp from "../../pages/SingIn";
import { useSelector } from "react-redux";

function Nav() {

  const online = useSelector(store => store.userReducer.online)
  const userPhoto = useSelector(store => store.userReducer.user.photo)
  console.log(online)

  const aList = ArrayList.navbar

  const [photo, setPhoto] = useState("/assets/images/menu.png")

  useEffect(() => {
    userPhoto?setPhoto(userPhoto):"/assets/images/menu.png"
  }, [photo])

    return (
      <>
        <header>
          <nav className="navbar navbar-dark navbar-expand-md align-items-top headerDiv">
            <div className="container-fluid">
              
              <div className="divLogo">
                <img src={logo} alt="" />
              </div>
                
              <div className="divButtons w-25">

                <Anchor to="/singin" className="avatar">
                  <img src="/assets/images/perfil-white.png" alt="" />
                </Anchor>
        
                < button className="navbar-toggler buttonMenu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  
                    <img className="menuItem" src={userPhoto || "/assets/images/menu.png"} alt="" />
                 
                </button>
              
              </div>  

            </div>
            <div className="buttonContainer">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex ">
                    <AnchorList list={aList}/>
                  </ul>
                </div>
              </div>
          </nav>
        </header>
      </>
   )     
}

export default Nav