import React from "react";
import Hero from "../layouts/Hero";
import './pages.css'
import { Link as Anchor } from "react-router-dom";
import facebook from '../../public/assets/images/facebook (1).png'
import google from '../../public/assets/images/google (1).png'

const SingUp = () => {
    return (
        <Hero>
            <div className="wrapper p-3">
                <div>
                    <div>
                        
                    </div>
                
                    <div className="d-flex flex-column align-items-center w-100">
                        <h1 className="m-2 w-100 text-aling-center">
                            Sing In
                        </h1>
                        <span className="m-2 w-100">
                        New here? <Anchor>Sing Up</Anchor> and join us!
                        </span>
                        <input type="text" name="name" placeholder="Email" className="form-control rounded-2 m-2 p-1"/>
                        <input type="text" name="name" placeholder="Password" className="form-control rounded-2 m-2 p-1"/>
                        <Anchor to='Home' className="button my-2 p-2 singinButton w-100">Sing In</Anchor>
                        <p>———————— or ————————</p>
                        <button className="button">
                            <img className="" src={google} alt="Login with Google" />
                        </button>
                        <button>
                            <img className="" src={facebook} alt="Login with Facebook" />
                        </button>
                    </div>
                </div>
            </div>
        </Hero>
    )
}

export default SingUp