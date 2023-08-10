import React from "react";
import Nav from "../Components/nav/nav";
import Footer from "../Components/footer/Footer";

const Hero = ({children}) =>{

    return (
        <>
        <header>
            <Nav />
        </header>
            {children}
        <Footer/>
    </>
    )
    
}

export default Hero