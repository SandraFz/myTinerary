import React, {useState,useEffect} from "react";
import Hero from "../layouts/Hero";
import CardGral from "../Components/card/CardGral";
/* import Data from '../assets/data/Cities.json' */

const api = 'http://localhost:8000/api/cities'


const Cities = () => {
    
    const [cityList, setCityList] = useState([])
    const [content, setContent] = useState('')
    const [dispMessage, setDispMessage] = useState("d-none")
    const [dispCards, setDispCards] = useState("d-flex justify-content-center flex-wrap gap-2 px-3")

    const message = document.getElementById('empty')
    const cards = document.getElementById('cards-group')
    
    /* useEffect(() =>{
        fetch(api)
            .then(res => res.json())
            .then(data => setCityList(data.list))
            .catch(err => console.error(err))
    }, [])*/

   /* useEffect(() => {
        fetch(api+(content?`/name?name=${content}`:''))
            .then(res => res.json())
            .then(data => setCityList(response?data.response:data.list ))
            .catch(err => console.log(err)) 
            console.log(content)
            console.log(`${api}?name=${content}`)
            
    }, [content])  */

    useEffect(() => {
        
        fetch(api+(content?`/name?name=${content}`:''))
            .then(res => res.json())
            .then(data => {
                if (data.success) {

                    if(data.count == 0){
                        setDispMessage('d-block fs-4 fw-bold')
                        setDispCards("d-none justify-content-center flex-wrap gap-2 px-3")
                        console.log(data.message);
                    } else {
                        setDispMessage('d-none')
                        setDispCards("d-flex justify-content-center flex-wrap gap-2 px-3")
                        console.log(data, empty); 
                        setCityList(data.response);
                        console.log(cityList)
                    }

                    /* if(data.count > 0){
                        
                   /*  setShow(true) */
                        
                    /* } else {
                        console.log(data.message) */
                        /* message.style.display='none' */
                    /* } */ 
                } else {
                    /* if(data.count > 1){
                        setShow('d-block') */
                        console.log(data.message);
                   /*  } */
                    
                }
                message.className=dispMessage
                    cards.className=dispCards
                
            })
            .catch(err => console.log(err));
    }, [content, cards]);

    /* useEffect(() => {
        console.log(cityList)
    }, [cityList]) */

   let inputHandle = (e) => {
     
        setContent(e.target.value)
        
    }

    let buttonHandler = () => {
        
        setDispMessage('d-none')
        setDispCards("d-flex justify-content-center flex-wrap gap-2 px-3")
        setContent('')
    }

    return (
         <Hero>
            
            <div class="d-flex flex-column-reverse w-100 align-items-center categories"> 
                
                <form class="d-flex p-2 div-search">
                    <input type="text" onChange={inputHandle} value={content}/>
                    <button type="button" class="xButton button" onClick={buttonHandler} >x</button>
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
                         
         </Hero>
     )
}

export default Cities