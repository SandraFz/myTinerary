import React, { useState } from "react";
import Arrow from "../arrow/Arrow";
import './Carrusel.css'

const Carrusel = () => {

    const [index, setIndex] = useState(0)

    

    let left = {class:'left', leftUrl: '../../../public/assets/images/arrow-left.png', leftAlt: 'Atrás'};
    let right = {class: 'right', rightUrl: '../../../public/assets/images/arrow-right.png', rightAlt: 'Adelante'};

    return (
        <div className="d-flex justify-center carrusel mb-3">

            <div className="left">
                <Arrow  className={left.class} src={left.leftUrl} alt={left.leftAlt}/>
            </div>

                <img className="carImg" src="../public/assets/tourism-shutterstock_460303915-780.jpg" alt="Turista" />
               
                <div className="line"></div>

            <div className="right">
                <Arrow className={right.class} src={right.rightUrl} alt={right.rightAlt} />
            </div>
              
        </div>
    )
}

export default Carrusel
