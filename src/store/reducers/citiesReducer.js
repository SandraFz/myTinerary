import { createReducer } from "@reduxjs/toolkit";
import {getCity, moveCarrousel} from '../actions/citiesActions.js'

const initialState = {
    count: 0,
    shortArray: [],
    city: {},
    cityName: ''
}

const citiesReducer = createReducer(initialState, (builder) => {
    builder.addCase(moveCarrousel, (store, action) =>{
        console.log(store)
        return{
            ...store,
            ...store.count += action.payload
        }
    }),
    builder.addCase(getCity, (store, action) =>{
        return{
            ...store,
            city: action.payload.obj,
            cityName: action.payload.obj.name
        }
    })
})

export default citiesReducer