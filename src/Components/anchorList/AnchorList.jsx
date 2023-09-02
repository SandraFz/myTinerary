import React from "react";
import './AnchorList.css'
import { Link as Anchor } from "react-router-dom";

const AnchorList = ({children, list}) => {

    return (
        <>
            {children}
            {
            list.map(elem => {
                
                return  <li className="nav-item m-1"  key={elem.value}>
                            <Anchor className="text" to={elem.to}>{elem.value}</Anchor>
                        </li>
            })
            
            }
        </>
      
    )
}

export default AnchorList