import React from "react";
import Hero from "../layouts/Hero";
import ItinerariesCard from "../Components/itineraryCard/ItinerariesCard";

const Itineraries = () => {
    return (
        <Hero>
            <div className="wrapper">
                <ItinerariesCard/>
            </div>
        </Hero>
    )
}

export default Itineraries