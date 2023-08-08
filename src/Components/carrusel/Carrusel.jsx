import React, { useState } from "react";
import Arrow from "../arrow/Arrow";
import './Carrusel.css'
import Data from '../../../public/assets/bd.json'

const Carrusel = () => {

    const [index, setIndex] = useState(0)
    const [bullets, setBullets] = useState(Data.events)

    let left = {class:'left', leftUrl: '../../../public/assets/images/arrow-left.png', leftAlt: 'Atrás'};
    let right = {class: 'right', rightUrl: '../../../public/assets/images/arrow-right.png', rightAlt: 'Adelante'};

    let imagesCarrusel = Data.events[index].image;

    let slideLeft = () =>{

        (index-1) < 0?setIndex(Data.events.length-1):setIndex(index-1)

    }

    let slideRight = () =>{
        (index + 1) > Data.events.length-1 ?setIndex(0):setIndex(index + 1)
    }

    let bullet = <div className="line"></div>
    /*Data.events.array.map(element => { 
    element = <div className="line"></div>})*/

    /*let arrayBullets = [];
    Data.events.array.forEach(element => {
        arrayBullets.push(bullet)
        return arrayBullets
    });*/

    let  arrayBullets = () =>{
        Data.events.foreach(element =>{
            /*setBullets(bullets.push(<div className="line"></div>))*/
            console.log(bullets)
        })
    }
    

    
    return (
        <div className="d-flex justify-center carrusel mb-3">

            <div className="left" onClick={slideLeft + arrayBullets}>
                <Arrow  className={left.class} src={left.leftUrl} alt={left.leftAlt}/>
            </div>
                <div className="d-flex justify-content-center flex-wrap ">

                    
                    <img className="carImg" src={imagesCarrusel} alt="Turista" />
                </div>
                
               
              

            <div className="right" onClick={slideRight}>
                <Arrow className={right.class} src={right.rightUrl} alt={right.rightAlt} />
            </div>
              
        </div>
    )
}

export default Carrusel
