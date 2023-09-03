import { createReducer } from "@reduxjs/toolkit";
import {getCity, getSearch, moveCarrousel} from '../actions/citiesActions.js'

const initialState = {
    count: 0,
    search: '',
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
    })/* ,
    builder.addCase(getSearch, (store, action) =>{
        console.log(action)
        return{
            ...store,
            search: action.payload
        }
    }) */
})

export default citiesReducer