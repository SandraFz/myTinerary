import React, {useEffect} from "react";
import Hero from "../layouts/Hero";
import CardGral from "../Components/card/CardGral";
import Data from '../assets/data/Cities.json'

const apiLocal = 'http://localhost:8000/api/'

const Cities = () => {

    //const [cityList, setCityList] = useState([])
    
    useEffect(() =>{
        fetch(apiLocal)
            .then(res => res.json())
            .then(data => console.log(data))
        
    }, [])


    return (
         <Hero>
                
            <div className="d-flex justify-content-center flex-wrap gap-2 px-3" id="cards-group">
                {     
                    Data.cities.map(elem =>{
                        return <CardGral key={elem.id} array={elem}/>
                    })                
                    
                }                
            </div>
                
{/*                 <img className="w-100" src="../../../../public/assets/images/under_construction.jpg" alt="" />
 */}             
         </Hero>
     )
}

export default Cities