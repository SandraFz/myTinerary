import React from "react";
import Hero from "../../layouts/Hero";
import CardGral from "../card/CardGral";
import Cities from "../../assets/data/Cities.json"
import "./ItinerariesCard.css"

const Itineraries = () => {

    console.log(Cities.cities[0].image)
    let data = Cities.cities[0]
    return (
        <>
            <Hero>
                <div class="figure-detail w-100 d-flex flex-wrap align-items-center justify-content-center px-3 tarjeta mt-5 rounded-3" style={{backgroundImage:`url(${data.image})`, backgroundPosition: 'center'}}  id="tarjeta">
                    <div class="w-100 h-100 figure-detail" >

                    </div>
                    {/* <img className="" src={data.image} alt="" /> */}
                    <div class="w-100 d-flex flex-column align-items-center justify-content-center text-detail">
                        <h1>{data.name}</h1>
                        <p>Description</p>
                        <div class="details d-flex flex-wrap justify-content-between">
                            <p>Detail</p>
                            <p>Detail</p>
                        </div>
                    </div>
                </div>
            </Hero>
        </>
    )
}

export default Itineraries