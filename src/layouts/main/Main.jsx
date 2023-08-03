import React from "react"
import Footer from "../../Components/footer/Footer.jsx"

const Main = () => {

    return (
        <>
      <main className="">
            <div className="d-flex justify-content-around p-2">
              <h1>Find the perfect destination</h1>
              <p>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and host of itinerary options, planning your next trip has never been easier.</p>
              <input type="submit" value="View more"/>
            </div> 
            <div>
              <img className="w-100" src="../public/assets/tourism-shutterstock_460303915-780.jpg" alt="Turista" />
            </div>
    </main>
        <Footer/>
        </>
    )
}

export default Main