import { ReactFragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../layouts/Hero";


const Detail = () =>{

    const [city, setCity] = useState()

    const {id} = useParams()
    console.log(id)

    let api = 'http://localhost:8000/api?id='

    useEffect(() =>{
        fetch(api+id)
            .then(res => res.json())
            .then(data => console.log(data))
    },[])

    return(
       
        <Hero>
            <div className="d-flex flex-column align-items-center justify-content-between p-3 w-100 p-1 rounded-2 content-card-group">
            {/* <img src={city.image} className="figure-card figure-card1 rounded-top rounded-end mt-1"></img> */}
                <h3>
                   {console.log('city es esto: '+city)}
                   {console.log('resultado del fetcheo: '+api+'?id='+id)}
                </h3>
                <p>
                    {/* {city.description} */}
                </p>
                <div className="d-flex justify-content-between align-items-center g-5 w-100 button-card-group">
                    <a href=".${subdirec}/details.html/${element._id}" className="btn p-1">
                        more...
                    </a>
                </div>
            </div> 
            </Hero>
       
        
    )
}

export default Detail