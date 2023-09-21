import React from "react";
import { Navigate } from "react-router";

const ProtectedRouter = ({children}) => {
    const status = localStorage.getItem('online')
    if(!status){
        return children
    }

    return <Navigate to='/'/>
}

export default ProtectedRouter