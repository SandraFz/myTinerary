import React, { useEffect, useState } from "react";
import Hero from "../../layouts/Hero";
import CardGral from "../card/CardGral";
import Cities from "../../assets/data/Cities.json"
import "./ItinerariesCard.css"
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {setItineraries} from "../../store/actions/itinerariesActions";


const ItinerariesCard = (/* {name} */) => {

    const dispatch = useDispatch()

    const name = useSelector(store => store.citiesReducer.cityName)
    const itin = useSelector(store => store.itinerariesReducer.itineraries)
    console.log(itin)
    /* const [itin, setItin] = useState([]) */

    /* const {name} = useParams() */

    let api = 'http://localhost:8000/api/itineraries'
    console.log(name)
    useEffect(()=>{
        fetch(api+`/byCity?name=${name}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.response)
                dispatch(setItineraries({itineraries:data.response}))})
            .catch(error => console.log(error))
    },[])

    /* console.log(Cities.cities[0].image)
    let data = Cities.cities[0] */
    return (
        <>
               {
                    itin && (
                        itin.map(elem=>{
                            return <div class="figure-detail w-100 d-flex flex-wrap align-items-center justify-content-center px-3 tarjeta mt-5 rounded-3" style={{backgroundImage:`url(${elem.image})`, backgroundPosition: 'center'}}  id="tarjeta">
                            <div class="w-100 h-100 figure-detail" >
        
                            </div>
                            {/* <img className="" src={data.image} alt="" /> */}
                            <div class="w-100 d-flex flex-column align-items-center justify-content-center text-detail mb-6">
                                <h1>{elem.name}</h1>
                                <p>Description</p>
                                <div class="details d-flex flex-wrap justify-content-between">
                                    <p>Detail</p>
                                    <p>Detail</p>
                                </div>
                            </div>
                        </div>
                        })
                    )
               }
                
        </>
    )
}

export default ItinerariesCard