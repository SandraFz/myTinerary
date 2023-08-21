import React, { useEffect, useState } from 'react'
import './CardGral.css'

const CardGral = ({array, action}) => {

    

    
    return (
        
                <div className="d-flex flex-column align-items-center justify-content-between p-3 w-100 p-1 rounded-2 content-card-group">
                    <img  className="w-50 figure-card figure-card1 rounded-top rounded-end mt-1" src={array.image}>
                    </img>
                    <h3>
                        {array.name}
                    </h3>
                    <p>
                        {array.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center g-5 w-100 button-card-group">

                        <a href={action} className="btn p-1">
                            more...
                        </a>
                    </div>
                </div>
             
           
      
    )
}

export default CardGral