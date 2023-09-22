import React, {useState,useEffect} from "react";
import Hero from "../layouts/Hero";
import CardGral from "../Components/card/CardGral";
/* import Data from '../assets/data/Cities.json' */
import paisaje from '../assets/paisaje4.jpg'
import { useSelector, useDispatch } from "react-redux";
import citiesActions from "../store/actions/citiesActions";

const { filter, getAllCities } = citiesActions

const api = 'http://localhost:8000/api/cities'


const Cities = () => {
    
    const data = useSelector(store => store.citiesReducer)
    const allCities = useSelector(store => store.citiesReducer.response)
    const cityList = data.cities
    const counter = data.count
    const dispatch = useDispatch()


    /* const [dispMessage, setDispMessage] = useState("d-none")
    const {index, setIndex} = useState(counter)

    const message = document.getElementById('empty')
    const cards = document.getElementById('cards-group') */

    useEffect(() =>{
       
        dispatch(getAllCities({}))
        
    }, []) 

   let inputHandle = (e) => {
        dispatch(filter({txt: e.target.value}))
    }

    /* let buttonHandler = () => {
        
        setDispMessage('d-none')
      
    } */

    return (
         <Hero>
            
            <div className="wrapper">
                <div className="d-flex flex-column-reverse w-100 align-items-center categories"> 
                    
                    <form className="d-flex p-2 div-search">
                        <input type="text" onChange={inputHandle}/>
                        {/* <button type="button" className="xButton button p-1" onClick={buttonHandler} >x</button> */}
                    </form>
                </div>

                    {
                        cityList.length === 0 && (<span>There's no cities whit that name.</span>)
                    }
                    
                

                <div className="d-flex justify-content-center flex-wrap gap-2 px-3" id="cards-group">
                    
                    {     
                    cityList && (
                        cityList.map(elem =>{
                            return <CardGral key={elem._id} city={elem}/>
                        })  
                    )           
                    }                
                </div>
            </div>
                         
         </Hero>
     )
}

export default Cities