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

    /* const [city, setCity] = useState({}) */
   
    /* const [imgWidth, setImgWidth] = useState(0)
    const [imgHeight, setImgHeight] = useState(0)   */

    const {id} = useParams()
    /* console.log('id es: '+id) */

    let api = 'http://localhost:8000/api'

    /* const imgCity = new Image()

    imgCity.src = city.image */
     

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
           /*  console.log(city) */
        
            /* console.log(itin) */
        
           /*  imgCity.onload = () =>{

                setImgWidth(imgCity.width)
                setImgHeight(imgCity.height) 
                }
            console.log(imgCity.width) */
    },[])

    /* useEffect(() => {
        fetch(api+`/itineraries/byCity?name=${city.name}`)
            .then(res => res.json())
            .then(dato => setItin(dato.response))
    }, []) */

    return(
        <Hero>
            {city && (
                <div className="justify-content-between p-3 p-1 rounded-2 containerInfo" style={{backgroundImage: `linear-gradient(to bottom, 
                rgba(2, 48, 71, 0.7), rgba(2, 48, 71, 0.7)), url(${city.image}`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    {/* <div> */}
                    {/* <div  className="divImg"> */}
                       {/*  <img src={city.image} style={{with: {imgCity.width}}} className="figure-card figure-card1 rounded-top rounded-end mt-1 imgArticle"></img> */}
                {/* </div> */}
                    {/* </div> */}
                    <div className="d-flex flex-column containerData">
                         <h3>
                            {city.name}
                        </h3>
                        <p className="description">
                            {city.description}
                        </p>
                        {/* <div className="d-flex justify-content-between align-items-center g-5 w-100 button-card-group">
                            <Anchor to='/' className="btn p-1">
                                return
                            </Anchor>
                        </div> */}
                    </div>
                     
                </div> 
            )}
                    {/* <div>
                    <Anchor to='/' className="button">
                        Return
                    </Anchor>
                    </div> */}
            <div className="d-flex justify-content-center">
                {/* <span className="fs-4 fw-bold">Under construction. Come back soon to see what's new.</span> */}
                <Anchor to='/cities' className="button m-3 p-1">
                    Return
                </Anchor>
                <Anchor className="button m-3 p-1 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#itinList"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    Itineraries
                </Anchor>
            </div>

            <div className="collapse navbar-collapse" id="itinList">
                <ItinerariesCard name={city.name} className="itineariesCard"/>
            </div>
            

            
            {
                 /*  itin && (
                    itin.map(elem =>{
                        return <ItinerariesCard key={elem._id} itineraries={elem}/>
                    })
                )  */
            }
            
        </Hero> 
    )
}

export default Detail