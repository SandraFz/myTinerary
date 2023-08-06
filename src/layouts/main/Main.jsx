import React from "react"
import './Main.css'
import Carrusel from "../../Components/carrusel/carrusel"

const Main = () => {

    return (
        <>
          <main className="w-100">
            <div className="d-flex justify-content-around p-2">
              <h1>Find the perfect destination</h1>
              <p>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and host of itinerary options, planning your next trip has never been easier.</p>
              <input type="submit" value="View more"/>
            </div> 
            
            <Carrusel/>
          </main>
       
        </>
    )
}

export default Main