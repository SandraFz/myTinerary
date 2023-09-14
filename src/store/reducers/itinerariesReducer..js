import { createReducer } from "@reduxjs/toolkit";
import { setItineraries } from "../actions/itinerariesActions";
import citiesActions from "../actions/citiesActions";

const { getCity } = citiesActions

const initialState = {
    itineraries: []
}

const itinerariesReducer = createReducer(initialState, (builder) =>{
    builder.addCase(getCity, (store, action) => {
        return{
            ...store,
            cityName: action.payload.obj.name,
        }
    }),
    builder.addCase(setItineraries, (store, action) => {
        console.log(action.payload.itineraries)
        return{
            ...store,
            itineraries: [...action.payload.itineraries]
        }
    })
})


export default itinerariesReducer