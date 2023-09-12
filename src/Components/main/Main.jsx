import React, { useEffect } from "react"
import './Main.css'
import { Link as Anchor } from "react-router-dom"
import { getAllCities } from "../../store/actions/citiesActions"
import { useDispatch } from "react-redux"

const Main = () => {

  useEffect(() => {

  })
   
  const dispatch = useDispatch()

    return (
        <>
          <main className="w-100 container-fluid flex-column">
              <h1 className="m-1">Find hour perfect trip, designed by insiders who know and love their cities!</h1>
              {/*<h1>Find the perfect destination</h1>*/}
              <p className="m-1 text-align-center text-center">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and host of itinerary options, planning your next trip has never been easier.</p>
              {/*<p>Find hour perfect trip, designed by insiders who know and love their cities!</p>*/}
              <Anchor to='/cities' className="button info infoAnimation" /* onClick={dispatch(getAllCities({}))}  */id='up'>
                See more  
              </Anchor>
          </main>
       
        </>
    )
}

export default Main
