import React from "react";
import Hero from "../layouts/Hero";

const api = 'http://localhost:8000/api/auth'

const EditUser = () => {

    const form = useRef({}) 

const [userData, setUserData] = useState({
    name:"",
    lastName:"",
    email:"",
    password:"",
    photo:"",
    country:""
})

useEffect(()=>{
    /* console.log(userData) */
},[userData])

const handleSubmit = async () => {
    /* e.preventDefault() */
    const formData = new FormData(form.current)
    setUserData({
        name: formData.get('name'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        password: formData.get('password'),
        photo: formData.get('photo'),
        country: formData.get
    })
    console.log("handleSubmit funciona")
    const res = await axios.post(api, userData)
    console.log(res)
}

    return (
        <Hero>
            <div className="wrapper p-3">
                <form ref={form}>
                
                    <div className="d-flex flex-column align-items-center w-100">
                        <h1 className="m-2 w-100">
                            Sing Up
                        </h1>
                        <span className="m-2 w-100">
                        Already have an account? <Anchor to='/singin'>Log In</Anchor> now!
                        
                        </span>
                        <input type="text" name="name" /* value={} */ placeholder="Name" className="form-control rounded-2 m-2 p-1"/>
                        <input type="text" name="lastName" /* value={} */ placeholder="lastName" className="form-control rounded-2 m-2 p-1"/>
                        <input type="text" name="email" /* value={} */ placeholder="Email" className="form-control rounded-2 m-2 p-1"/>
                        <input type="text" name="password" /* value={} */ placeholder="Password" className="form-control rounded-2 m-2 p-1"/>
                        <input type="text" name="photo" /* value={} */ placeholder="URL photo" className="form-control rounded-2 m-2 p-1"/>
                        <select name="country" className=" rounded-2 m-2 p-1 w-100">
                            <option value="Argentina">Argentina</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Belgium">Belgium</option>
                            <option value="China">China</option>
                            <option value="Singapure">Singapure</option>
                            <option value="Republic of Korea">Republic of Korea</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Morocco">Morocco</option>
                        </select>
                        <Anchor onClick={handleSubmit} /* to='/singin' */ className="button my-2 p-2 singinButton w-100">Sing In</Anchor>
                    </div>
                </form>
            </div>
        </Hero>
    )
}

export default EditUser