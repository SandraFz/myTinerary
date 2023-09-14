import React from "react";
import './LoginButton.css'
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";



const LoginButton = ({ logo, platform}) => {

 /*    const [userData, setUserData] = useState({
        email:"",
        password:"",
    }) */
    

   const login = useGoogleLogin({
    onSuccess: async tokenResponse =>{ 
        console.log(tokenResponse)
        const {data} = await axios.get(api,{
            headers:{
                Authorization: 'bearer '+tokenResponse.access_token
            }
        } )
        fn(data)
        /* fn(
            setUserData(
                {
                    email:data.email,
                    password:"Abc123",
                }
            )
        )  */
        console.log(data)
    },
  });

    return (
        <button className="platform">
            <img className="" src={logo} alt={`Login whit ${platform}`} />
        </button>
    )
}

export default LoginButton