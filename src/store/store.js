import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from './reducers/citiesReducer.js'
import itinerariesReducer from "./reducers/itinerariesReducer..js";
import userReducer from "./reducers/userReducer.js"

export const store = configureStore({
    reducer: {
        citiesReducer,
        userReducer
       /*  itinerariesReducer */
    }
})