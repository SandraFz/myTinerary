import React, { ReactFragment, useEffect, useState } from "react";
import { Link as Anchor, useParams } from "react-router-dom";
import Hero from "../layouts/Hero";
import axios from "axios";
import './pages.css'


const Detail = () =>{

    const [city, setCity] = useState({})
    const [imgWidth, setImgWidth] = useState(0)
    const [imgHeight, setImgHeight] = useState(0)  

    const {id} = useParams()
    console.log('id es: '+id)

    let api = 'http://localhost:8000/api'

    const imgCity = new Image()

    imgCity.src = city.image
     

    useEffect(() =>{

        /* axios.get('http://localhost:8000/api/'+id)
            .then(res =>{
                (setCity(res.data.oneCity))
            })
            .catch(err =>{
                console.log(err)
            }) */
    
        fetch(api+'/'+id)
            .then(res => res.json())
            .then(data => setCity(data.oneCity))
            console.log('data es ' +city)

            imgCity.onload = () =>{

                setImgWidth(imgCity.width)
                setImgHeight(imgCity.height) 
                }
            console.log(imgCity.width)
    },[])



    return(
        <Hero className="hero">
            {city && (
                <div className="justify-content-between p-3 p-1 rounded-2 containerInfo">
                    {/* <div> */}
                    <div style={{backgroundImage: `url("${city.image}")`/* width:imgWidth, height:imgHeight */}} className="divImg">
                       {/*  <img src={city.image} style={{with: {imgCity.width}}} className="figure-card figure-card1 rounded-top rounded-end mt-1 imgArticle"></img> */}
                </div>
                    {/* </div> */}
                    <div className="d-flex flex-column containerData">
                        <h3>
                            {city.name}
                        </h3>
                        <p>
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
            <div className="d-flex flex-column align-items-center">
                <span className="fs-4 fw-bold">Under construction. Come back soon to see what's new.</span>
                <Anchor to='/cities' className="button mt-3">
                    Return
                </Anchor>
            </div>
        </Hero> 
    )
}

export default Detail