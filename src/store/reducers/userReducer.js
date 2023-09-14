import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions.js";

const {loginUser} = userActions

const initialState = {
    user: {},
    token: null,
    online: false
}

const userReducer = createReducer(initialState, (builder) =>{
    builder.addCase(loginUser, (store, action) => {
        console.log(action.payload.response.data)
        let userData = action.payload.response.data.loginUser
        let sesionToken = action.payload.response.data.token
        return {
            ...store,
            user: {
                name:userData.name,
                lastName:userData.lastName,
                email:userData.email,
                password:userData.password,
                photo:userData.photo,
                country:userData.country
            },
            token: sesionToken,
            online: sesionToken?true:false
        }
    })
})

export default userReducer