import React from "react";
import Nav from "../Components/nav/Nav";
import Footer from "../Components/footer/Footer";
import './Hero.css'

const Hero = ({image, children}) =>{

    return (
        <div className="hero" style={{backgroundImage: `linear-gradient(to bottom, rgba(2, 48, 71, 0.5), rgba(251, 133, 0, 0.5)), url(${image}`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} >
            <Nav />
                {children}
            <Footer/>
        </div>
    )   
}

export default Hero