import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = 'http://localhost:8000/api/auth/token'

const loginUser = createAction('login_user', (obj) => {
    return {
        payload:obj
    }
})

const keepOnline = createAsyncThunk('authentication', async () => {

   try {
    const token = localStorage.getItem('token')
    console.log( token)
    const response = await axios.get(api, {
        headers: {
            Authorization: 'Bearer' + token
        }
    })
    console.log(response)

    /* const credentials = {
        user: data.
    } */
    console.log( data )
    return data
   } catch (error) {
    console.log(error)
   }
})

export default {loginUser, keepOnline}
