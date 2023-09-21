import React, { useState, useRef, useEffect } from "react";
import Hero from "../layouts/Hero";
import './pages.css'
import { Link as Anchor, json, useNavigate } from "react-router-dom";
import facebook from '../../public/assets/images/facebook (1).png'
import google from '../../public/assets/images/google (1).png'
import paisaje2 from '../assets/paisaje2.jpg'
import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import axios from "axios";
import LoginButton from "../Components/loginButton/LoginButton";
import { useDispatch } from "react-redux";
import userActions from "../store/actions/userActions.js";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const api = 'http://localhost:8000/api/auth'
const apiGoogle = 'https://www.googleapis.com/oauth2/v3/userinfo'

const { loginUser } = userActions

const SingIn = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const form = useRef({})

    const [userData, setUserData] = useState({
        email:"",
        password:"",
    })

    const tostaditaStyle = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }

      

    /* useGoogleOneTapLogin({
    onSuccess: credentialResponse => {
        console.log(credentialResponse);
    },
    onError: () => {
        console.log('Login Failed');
    },
    }); */

/* useEffect(() => {
    oneTapLogin
}, []) */



     useEffect(() => {
        console.log(userData)
        
        try {
            if(userData.email && userData.password){
                
            
                axios.post(api+"/in", userData)
                    .then(response => {

                        if (response.data.success===false){

                           /*  console.log("sí es true") */
                            toast("Sorry, you don't have a count", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            });
                        }
                       
                        console.log(response.data)
                        dispatch(loginUser({response}))
                        localStorage.setItem('token', response.data.token)
                        localStorage.setItem('online', true)
                        localStorage.setItem('user', JSON.stringify(response.data))
                        console.log(localStorage)  
                        
                       /*  window.location.reload() */
                        /* toast(`Wellcome, ${response.data.loginUser.name}`, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        }); */
                    }) 
            } 
           
        } catch (error) {
            console.log(error)
        }
    },[userData]) 

    const handleSubmit = 
            
        async () => {
            
            const formData = new FormData(form.current)
            const email = formData.get('email')
            const pwd = formData.get('password')

            if (!email) {
                toast('Introduce your email', tostaditaStyle);
              } else if (!/\S+@\S+\.\S+/.test(email)) {
                toast('Introduce a valid email', tostaditaStyle);
              } else if (!pwd) {
                toast('Introduce your password', tostaditaStyle);
              } else {
                setUserData({
                    email: email,
                    password: pwd
                })
              }
            console.log("handleSubmit funciona")
        }
       
const handleSubmitGoogle = async (data) => {

        setUserData({
            email: data.email,
            password: import.meta.env.VITE_PASSWORD_U
        })
        
            console.log(data.email_verified)
           
    } 

    return (
        <Hero image={paisaje2}>
            <div className="wrapper p-3">
                <form ref={form}>
                    <div>
                        
                    </div>
                
                    <div className="d-flex flex-column align-items-center w-100">
                        <h1 className="m-2 w-100 text-aling-center">
                            Sing In
                        </h1>
                        <span className="m-2 w-100 singin">
                        New here? <Anchor className="singin" to='/singup'>Sing Up</Anchor> and join us!
                        </span>
                        <input type="email" name="email" placeholder="Email" className="form-control rounded-2 m-2 p-1" required/>
                        <input type="text" name="password" placeholder="Password" className="form-control rounded-2 m-2 p-1" required/>
                        <Anchor onClick={handleSubmit} className="button my-2 p-2 singinButton w-100">Sing In</Anchor>
                        <p>———————— or ————————</p>
                            <LoginButton fn={handleSubmitGoogle}  logo={google} platform={'google'}/> 
                        <LoginButton logo={facebook} platform={'Login with Facebook'}/>
                    </div>
                </form>
            </div>
        </Hero>
    )
}

export default SingIn