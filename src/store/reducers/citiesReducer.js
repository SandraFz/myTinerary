import { createReducer } from "@reduxjs/toolkit";
import {filter, getAllCities, getCity, getSearch, moveCarrousel} from '../actions/citiesActions.js'

const initialState = {
    count: 0,
    search: '',
    shortArray: [],
    city: {},
    cityName: '',
    cities:[]
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
    .addCase(getAllCities.fulfilled, (store, action) => {
        console.log(action)
        return {
            ...store,
            cities: action.payload.response
        }
    })
    .addCase(getAllCities.pending, (store, action) => {
        return store
    })
    .addCase(getAllCities.rejected, (store, action) => {
        return store
    })
    .addCase(filter.fulfilled, (store, action) => {
        /* console.log(action.payload.count) */
        /* action.payload.count===0?cities: */
        return {
            ...store,
            cities: action.payload.response,
            count: action.payload.count
        }
    })
    .addCase(filter.pending, (store, action) => {
        return store
    })
    .addCase(filter.rejected, (store, action) => {
        return store
    })
    /* ,
    builder.addCase(getSearch, (store, action) =>{
        console.log(action)
        return{
            ...store,
            search: action.payload
        }
    }) */
})

export default citiesReducer