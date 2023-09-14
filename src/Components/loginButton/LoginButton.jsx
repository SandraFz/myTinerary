import React from "react";
import './LoginButton.css'
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";

const apiGoogle = 'https://www.googleapis.com/oauth2/v3/userinfo'

const LoginButton = ({fn, logo, platform}) => {

 /*    const [userData, setUserData] = useState({
        email:"",
        password:"",
    }) */
    

   const login = useGoogleLogin({
    onSuccess: async tokenResponse =>{ 
        /* console.log(tokenResponse) */
        const {data} = await axios.get(apiGoogle,{
            headers:{
                Authorization: 'Bearer '+tokenResponse.access_token
            }
        } )
        fn(data)
        /* fn(
            
            {
                email:data.email,
                password:"Abc123",
            }
    
        )  */
        console.log(data)
    },
  });

    return (
        <button onClick={(e) =>  {e.preventDefault(), login()}} className="platform">
            <img className="" src={logo} alt={`Login whit ${platform}`} />
        </button>
    )
}

export default LoginButton