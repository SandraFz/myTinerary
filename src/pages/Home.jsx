import React from "react";
import Hero from "../layouts/Hero";
import Carrusel from "../Components/carrusel/carrusel";
import Main from "../Components/main/Main";

const Home = () =>{

    return (
        <Hero>
            <Main/>
            <Carrusel/>
        </Hero>
    )
}

export default Home