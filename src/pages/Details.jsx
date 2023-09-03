import React, { ReactFragment, useEffect, useState } from "react";
import { Link as Anchor, useParams } from "react-router-dom";
import Hero from "../layouts/Hero";
import axios from "axios";
import './pages.css'
import ItinerariesCard from "../Components/itineraryCard/ItinerariesCard";
import { useSelector, useDispatch } from "react-redux";
import {getCity} from "../store/actions/citiesActions";

const Detail = () =>{
    const dispatch = useDispatch()

    const city = useSelector(store => store.citiesReducer.city)
    console.log(city)
    /* const [city, setCity] = useState({}) */

    const {id} = useParams()
    /* console.log('id es: '+id) */

    let api = 'http://localhost:8000/api'

    useEffect(() =>{

        /* axios.get('http://localhost:8000/api/'+id)
            .then(res =>{
                (setCity(res.data.oneCity))
            })
            .catch(err =>{
                console.log(err)
            }) */
    
        fetch(api+'/cities/'+id)
            .then(res => res.json())
            /* .then(data => setCity(data.oneCity)) */
            .then(data => dispatch(getCity({obj: data.oneCity})))
            .catch(error => console.log(error)) 
    },[])

    /* useEffect(() => {
        fetch(api+`/itineraries/byCity?name=${city.name}`)
            .then(res => res.json())
            .then(dato => setItin(dato.response))
    }, []) */

    return(
        <Hero>
            <div className="wrapper">
                {city && (
                    <div className="justify-content-between p-3 p-1 rounded-2 containerInfo" style={{backgroundImage: `linear-gradient(to bottom, 
                    rgba(2, 48, 71, 0.7), rgba(2, 48, 71, 0.7)), url(${city.image}`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                       
                        <div className="d-flex flex-column containerData">
                            <h3>
                                {city.name}
                            </h3>
                            <p className="description">
                                {city.description}
                            </p>
                            
                        </div>
                        
                    </div> 
                    
                )}
                    
                <div className="d-flex justify-content-center">
                    
                    <Anchor to='/cities' className="button m-3 p-1">
                        Return
                    </Anchor>
                    <Anchor className="button m-3 p-1 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#itinList"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        Itineraries
                    </Anchor>
                </div>
                <div className="collapse navbar-collapse" id="itinList">
                { city.itineraries && (
                     
                         <ItinerariesCard itin={city.itineraries} className="itineariesCard"/>
                    
                     
                     )}
                     </div>
            </div>
            
        </Hero> 
    )
}

export default Detail