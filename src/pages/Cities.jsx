import React, {useState,useEffect} from "react";
import Hero from "../layouts/Hero";
import CardGral from "../Components/card/CardGral";
/* import Data from '../assets/data/Cities.json' */

const api = 'http://localhost:8000/api/'

const Cities = () => {

    const [cityList, setCityList] = useState([])
    
    useEffect(() =>{
        fetch(api)
            .then(res => res.json())
            .then(data => setCityList(data.list))
    }, [])


    return (
         <Hero>
                
            <div className="d-flex justify-content-center flex-wrap gap-2 px-3" id="cards-group">
                {     
                    cityList.map(elem =>{
                        console.log('cityList es: '+cityList[0].name)
                        return <CardGral key={elem._id} city={elem}/>
                    })                
                    
                }                
            </div>
                
{/*                 <img className="w-100" src="../../../../public/assets/images/under_construction.jpg" alt="" />
 */}             
         </Hero>
     )
}

export default Cities