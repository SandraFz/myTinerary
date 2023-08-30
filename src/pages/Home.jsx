import React from "react";
import Hero from "../layouts/Hero";
import Carrusel from "../Components/carrusel/carrusel";
import Main from "../Components/main/Main";
import paisaje from '../assets//paisaje1.jpg'

const Home = () =>{

    return (
        <Hero image={paisaje} className="hero">
            <Main/>
            <Carrusel/>
        </Hero>
    )
}

export default Home