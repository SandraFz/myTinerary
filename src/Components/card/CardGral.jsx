import React, { useEffect, useState } from 'react'
import './CardGral.css'
import {Link as Anchor} from "react-router-dom"



const CardGral = ({city}) => {

    return (
        
                <div className="d-flex flex-column align-items-center justify-content-between p-3 w-100 p-1 rounded-2 content-card-group">
                    <img  className="w-50 figure-card figure-card1 rounded-top rounded-end mt-1" src={city.image}>
                    </img>
                    <h3>
                        {city.name}
                    </h3>
                    {/* <p>
                        {city.description}
                    </p> */}
                    <div className="d-flex justify-content-between align-items-center g-5 w-100 button-card-group">

                        <Anchor to={'/detail/'+city._id} className="p-1 button">
                            more...
                        </Anchor>
                    </div>
                </div>
             
           
      
    )
}

export default CardGral