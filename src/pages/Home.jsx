import React from "react";
import Hero from "../layouts/Hero";
import Carrusel from "../Components/carrusel/carrusel";
import Main from "../Components/main/Main";
import paisaje from '../assets/paisaje1.jpg'
import './pages.css'

const Home = () =>{

    return (
        <Hero image={paisaje}>
            <div className="wrapper">
                <Main/>
                <Carrusel/>
            </div>
        </Hero>
    )
}

export default Home