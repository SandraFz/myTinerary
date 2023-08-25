import React from "react";
import Nav from "../Components/nav/Nav";
import Footer from "../Components/footer/Footer";

const Hero = ({children}) =>{

    return (
        <>
            <Nav />
                {children}
            <Footer/>
        </>
    )
    
}

export default Hero