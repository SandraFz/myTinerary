import React, { useEffect, useState } from "react";
import Arrow from "../arrow/Arrow";
import './Carrusel.css'
import Data from '../../../public/assets/bd.json'



const Carrusel = () => {

    let imagesCarrusel4 = Data.events;

    const [index, setIndex] = useState(0)
    const [shortArray, setShortArray] = useState([]);

    let left = {class:'left', leftUrl: '../../../public/assets/images/arrow-left.png', leftAlt: 'Atrás'};
    let right = {class: 'right', rightUrl: '../../../public/assets/images/arrow-right.png', rightAlt: 'Adelante'};

    useEffect(()=>{

        switch(index){        
            case imagesCarrusel4.length-3:
                let images1 = []; 
                imagesCarrusel4.slice(index, index +3).map(
                    elem => { images1.push(elem)}), 
                images1.push(imagesCarrusel4[0])
                
                setShortArray(images1)
                console.log(`Case 1; index:` + index)
                break;

            case imagesCarrusel4.length-2:
                let images2 = [];
                imagesCarrusel4.slice(index, index +2).map(
                    elem => {
                    images2.push(elem)}),
                imagesCarrusel4.slice(0, 2).map(
                        elem => {
                        images2.push(elem)})
                setShortArray(images2)
                console.log(`Case 2; index:` + index)
                break;

            case imagesCarrusel4.length-1:
                let images3 = []
                images3.push(imagesCarrusel4[index]);
                imagesCarrusel4.slice(0, 3).map(elem => {
                    images3.push(elem)
                })
                setShortArray(images3)
                console.log(`Case 3; index:` + index)
            break;

            case imagesCarrusel4.length:
                let images4 = []
                images4 = imagesCarrusel4.slice(0, 4)
                console.log(`Case 4; index:` + index)
                break;
    
            default:
                let images = []
                imagesCarrusel4.slice(index, index+4).map(elem => {
                    images.push(elem)
                })
                setShortArray(images)
                console.log(`Case default; index: ${index}`)
            break;
        }

        let interval = setInterval(()=>{}, 1000)
        interval
        
        console.log(imagesCarrusel4)
        console.log(shortArray)

        return clearInterval(interval)        

    },[index])
    
    let slideLeft = () =>{

        (index-1) < 0?setIndex(Data.events.length-1):setIndex(index-1)
    }

    let slideRight = () =>{
        (index + 1) > Data.events.length-1 ?setIndex(0):setIndex(index + 1)
        console.log(`slideRight, index: ${index}`)
    }
    

    
    
   

   
    

    
    return (
        /*<div className="d-flex justify-center carrusel mb-3">

        <div className="left" onClick={slideLeft + arrayBullets}>
            <Arrow  className={left.class} src={left.leftUrl} alt={left.leftAlt}/>
        </div>
            <div className="d-flex justify-content-center flex-wrap ">

                
                <img className="carImg" src={imagesCarrusel} alt="Turista" />
            </div>
            
           
          

        <div className="right" onClick={slideRight}>
            <Arrow className={right.class} src={right.rightUrl} alt={right.rightAlt} />
        </div>
          
    </div>*/

        <div className="d-flex justify-center carrusel mb-3">

            <div className="left" onClick={slideLeft}>
                <Arrow  className={left.class} src={left.leftUrl} alt={left.leftAlt}/>
            </div>
                <div className="d-flex justify-content-center flex-wrap ">

                    {
                        shortArray.map((elem, idElem) =>{

                            return (<img key={idElem} className="carImg4" src={elem.image} alt="Turista" />)
                        })

                    }
                    
                    
                </div>
                
               
              

            <div className="right" onClick={slideRight}>
                <Arrow className={right.class} src={right.rightUrl} alt={right.rightAlt} />
            </div>
              
        </div>
    )
}

export default Carrusel
