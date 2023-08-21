import React from "react";
import './AnchorList.css'
import { Link as Anchor } from "react-router-dom";

const AnchorList = ({children, list}) => {

    return (
        <>
            {children}
            {
            list.map(elem => {
                
                return  <li className="nav-item">
                            <Anchor className="text" key={elem.value} to={elem.to}>{elem.value}</Anchor>
                        </li>
            })
            
            }
        </>
      
    )
}

export default AnchorList