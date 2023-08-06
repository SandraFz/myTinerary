import React from "react";
import './Arrow.css'

const Arrow = ({style, src, alt}) => {

    return (
       
            <img style={style} src={src} alt={alt} className="arrow d-flex align-items-center"/>
      
    )

}

export default Arrow