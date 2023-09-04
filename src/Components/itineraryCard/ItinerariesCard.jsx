import React, { useEffect, useState } from "react";
import Hero from "../../layouts/Hero";
import CardGral from "../card/CardGral";
import Cities from "../../assets/data/Cities.json"
import "./ItinerariesCard.css"
import { Link as Anchor } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {setItineraries} from "../../store/actions/itinerariesActions";
import avatar from '../../../public/assets/images/perfil-white.png'


const ItinerariesCard = ({itin}) => {

   /*  const dispatch = useDispatch() */

    const name = useSelector(store => store.citiesReducer.cityName)
   /*  const itin = useSelector(store => store.itinerariesReducer.itineraries) */
    console.log(itin)
    
    /* const [itin, setItin] = useState([]) */

    /* const {name} = useParams() */

    let api = 'http://localhost:8000/api/itineraries'
    console.log(name)
    useEffect(()=>{
       /*  if(name != ""){
            fetch(api+`/byCity?name=${name}`)
            .then(res => res.json())
            .then(data => {
                console.log(api+`/byCity?name=${name}`)
                console.log(data.response)
                dispatch(setItineraries({itineraries:data.response}))})
            .catch(error => console.log(error))
        } */
        
    },[])

    return (
        <>
               {

                    itin.length > 0 ? (
                        itin.map(elem=>{
                        return <div key={elem._id} className="w-100 d-flex flex-wrap align-items-center justify-content-center px-3 tarjeta mt-5 rounded-3 border-bottom border-3 border-dark"  id="tarjeta">
                            <div className="figure-detail d-flex" >
                                <img className="mt-5" src={elem.image!==""?elem.image:avatar} alt="" />
                                <h1>{elem.name}</h1>
                            </div>
                            
                            <div className="w-100 d-flex flex-column align-items-start justify-content-center text-detail mb-6">
                                <p>Price: {"💵".repeat(elem.price)}</p>
                                <p>Duration: {elem.duration}</p>
                                <p>Likes: {elem.like}</p>
                                <p>{elem.hastags}</p>
                            </div>
                            <Anchor className="button m-3 p-1 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#activitiesList"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                View more...
                            </Anchor>
                            <div className="collapse navbar-collapse m-5" id="activitiesList">
                                <h3>
                                    Under Construction
                                </h3>
                            </div>
                        </div>
                        })
                    ): <span id="empty">There's no itineraries yet.</span>
               }
                
        </>
    )
}

export default ItinerariesCard