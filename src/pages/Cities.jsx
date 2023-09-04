import React, {useState,useEffect} from "react";
import Hero from "../layouts/Hero";
import CardGral from "../Components/card/CardGral";
/* import Data from '../assets/data/Cities.json' */
import paisaje from '../assets/paisaje4.jpg'
import { useSelector, useDispatch } from "react-redux";
import { filter, getAllCities } from "../store/actions/citiesActions";

const api = 'http://localhost:8000/api/cities'


const Cities = () => {
    
    const data = useSelector(store => store.citiesReducer)
    console.log(data)
    const allCities = useSelector(store => store.citiesReducer.response)
    const cityList = data.cities
    console.log(cityList)
    const counter = data.count
    const dispatch = useDispatch()

    /* const [cityList, setCityList] = useState(allCities) */
    /* const [content, setContent] = useState('') */
    /* const [initiaList, setInitiaList] = useState([]) */
    const [dispMessage, setDispMessage] = useState("d-none")
    const [dispCards, setDispCards] = useState("d-flex justify-content-center flex-wrap gap-2 px-3")
    const {index, setIndex} = useState(counter)

    const message = document.getElementById('empty')
    const cards = document.getElementById('cards-group')

    /useEffect(() =>{
       
        dispatch(getAllCities({}))
        
    }, []) 

   /* useEffect(() => {
        fetch(api+(content?`/name?name=${content}`:''))
            .then(res => res.json())
            .then(data => setCityList(response?data.response:data.list ))
            .catch(err => console.log(err)) 
            console.log(content)
            console.log(`${api}?name=${content}`)
            
    }, [content])  */

    useEffect(() => {
        
        /* fetch(api+(content?`/name?name=${content}`:''))
            .then(res => res.json())
            .then(data => {
                if (data.success) {*/

                    if(data.count == 0){
                        setDispMessage('d-block fs-4 fw-bold')
                        setDispCards("d-none justify-content-center flex-wrap gap-2 px-3")
                        console.log(data.message);
                    } else {
                        setDispMessage('d-none')
                        setDispCards("d-flex justify-content-center flex-wrap gap-2 px-3")
                        /* console.log(data, empty);  */
                        /* setCityList(data.response); */
                        /* console.log(cityList) */
                    }
                /*} else {
                        console.log(data.message);
                }
                message.className=dispMessage
                    cards.className=dispCards
            })
            .catch(err => console.log(err)); */
    }, [/* content, cards*/ index]);

    /* useEffect(() => {
        console.log(cityList)
    }, [cityList]) */

   let inputHandle = (e) => {
     
        /* setContent(e.target.value) */
        console.log(e.target.value)
        dispatch(filter({txt: e.target.value}))
    }

    let buttonHandler = () => {
        
        setDispMessage('d-none')
        setDispCards("d-flex justify-content-center flex-wrap gap-2 px-3")
        setContent('')
    }

    return (
         <Hero>
            
            <div className="wrapper">
            <div className="d-flex flex-column-reverse w-100 align-items-center categories"> 
                
                <form className="d-flex p-2 div-search">
                    <input type="text" onChange={inputHandle}/>
                    <button type="button" className="xButton button" onClick={buttonHandler} >x</button>
                </form>
            </div>
                
            <span id="empty">There's no cities whit that name.</span>

            <div /* className="d-flex justify-content-center flex-wrap gap-2 px-3" */ id="cards-group">
                
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