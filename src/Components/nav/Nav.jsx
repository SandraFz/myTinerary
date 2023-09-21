import React, { useEffect, useState } from "react";
import './Nav.css'
import AnchorList from "../anchorList/AnchorList";
import {Link as Anchor} from 'react-router-dom'
import ArrayList from '../../assets/data/links.json'
import logo from '../../../public/assets/images/brand-mytinerary-reducido.png'
import hamburguer from '../../assets/img/menu-white.png'
import SingUp from "../../pages/SingIn";
import { useSelector } from "react-redux";
import avatar from '/assets/images/perfil-white.png'

function Nav() {

  const online = localStorage.getItem('online')
  const user = localStorage.getItem('user')

  const aList = ArrayList.navbar

  const [loged, setLoged] = useState(false)
  const [photo, setPhoto] = useState(avatar)

  useEffect(() => {
    /* setLoged(online) */
    /* loged===true?setPhoto(user.photo):setPhoto(avatar) */
    if(user){
      const userSesion = JSON.parse(user).loginUser
    console.log(userSesion)
      setPhoto(userSesion.photo)
    } else {
      setPhoto(avatar)
    }
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

                
                  <img src={photo} alt="" className="avatar"/>
                  {/* <div className="img" style={{backgroundImage: `url(${photo}`}}></div> */}
                
        
                < button className="navbar-toggler buttonMenu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  
                      <img className="menuItem" src="/assets/images/menu.png" alt="" />
                 
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