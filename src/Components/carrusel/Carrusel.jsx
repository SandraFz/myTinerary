import React, { useEffect, useState } from "react";
import Arrow from "../arrow/Arrow";
import './Carrusel.css'
import Data from '../../../public/assets/bd.json'



const Carrusel = () => {

    let imagesCarrusel4 = Data.events;

    const [index, setIndex] = useState(0)
    const [shortArray, setShortArray] = useState(imagesCarrusel4.slice(0, 4));

    let left = {class:'left', leftUrl: '../../../public/assets/images/arrow-left.png', leftAlt: 'Atrás'};
    let right = {class: 'right', rightUrl: '../../../public/assets/images/arrow-right.png', rightAlt: 'Adelante'};

    useEffect(()=>{

        console.log(shortArray)
        switch(index){        
            case imagesCarrusel4.length-3:
                console.log(`Case 1; index:` + index)
                let images1 = []; 
                imagesCarrusel4.slice(index, index+3).map(
                    elem => { images1.push(elem)}) 
                images1.push(imagesCarrusel4[0])
                
                setShortArray(images1)
                
                break;

            case imagesCarrusel4.length-2:
                let images2 = [];
                console.log(`Case 2; index:` + index)
                imagesCarrusel4.slice(index, index+2).map(
                    elem => {
                    images2.push(elem)})
                imagesCarrusel4.slice(0, 2).map(
                        elem => {
                        images2.push(elem)})
                setShortArray(images2)
                
                break;

            case imagesCarrusel4.length-1:
                let images3 = []
                console.log(`Case 3; index:` + index)
                images3.push(imagesCarrusel4[imagesCarrusel4.length-1])
                imagesCarrusel4.slice(0, 3).map(elem => {
                    images3.push(elem)
                })
                setShortArray(images3)
                console.log(`Case 3; index:` + index)
            break;
            
            case imagesCarrusel4.length:
                let images4 = []
                images4 = imagesCarrusel4.slice(0, 4)
                setShortArray(images4)
                console.log(`Case 4; index:` + index)
                break;
            
            default:
                console.log(`Case default; index: ${index}`)
                let images = []
                if(index<Data.events.length-3){
                    imagesCarrusel4.slice(index, index+4).map(elem => {
                        images.push(elem)
                    })
                    
                }else{
                    
                }
                setShortArray(images)
            break;
        }
       
        let interval = setInterval(()=>{}, 1000)
        interval

        return clearInterval(interval)        

    },[index])
    
    let slideLeft = () =>{

        switch(index+4){
            case imagesCarrusel4.length+3:
                setIndex(3)
                break;
            case imagesCarrusel4.length+2:
                setIndex(2)
                break;
            case imagesCarrusel4.length+1:
                setIndex(1)     
                break;
            case imagesCarrusel4.length:
                setIndex(0)
                break;
            default:
                setIndex(index+4)
                break
        }
      
        console.log(index)
    }

    let slideRight = () =>{
        
            switch(index+4){
                case imagesCarrusel4.length+3:
                    setIndex(3)
                    break;
                case imagesCarrusel4.length+2:
                    setIndex(2)
                    break;
                case imagesCarrusel4.length+1:
                    setIndex(1)     
                    break;
                case imagesCarrusel4.length:
                    setIndex(0)
                    break;
                default:
                    setIndex(index+4)
                    break
            }
          
            console.log(index)
   }

   /*let slideRight = () =>{
        (index + 4) > Data.events.length-1 ?setIndex(0):setIndex(index + 4)
        console.log(`slideRight después, index: ${index}`)
    }*/
    
    

    
    
   

   
    

    
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
                    
                    {//Corresponde al switch
                         shortArray.map((elem, idElem) =>{

                            if(idElem === index) return <img key={idElem} className="carImg5" src={elem.image} alt="Turista" />
                                else return <img key={idElem} className="carImg4" src={elem.image} alt="Turista" />
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
