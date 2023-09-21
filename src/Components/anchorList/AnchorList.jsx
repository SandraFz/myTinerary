import React from "react";
import './AnchorList.css'
import { Link as Anchor } from "react-router-dom";

const AnchorList = ({children, list}) => {

    const status = localStorage.getItem('online')
    console.log(status)

    return (
        <>
            {children}
            {
            list.map(elem => {
                if(status && elem.role.includes('logged')){
                    return  <li className="nav-item m-1"  key={elem.value}>
                            <Anchor className="text" /* onClick={elem.fn}  */to={elem.to}>{elem.value}</Anchor>
                        </li>
                } else if(!status && elem.role.includes('default')){
                    return  <li className="nav-item m-1"  key={elem.value}>
                            <Anchor className="text" /* onClick={elem.fn}  */to={elem.to}>{elem.value}</Anchor>
                        </li>
                }
                
            })
            
            }
        </>
      
    )
}

export default AnchorList