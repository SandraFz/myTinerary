import { createAction } from "@reduxjs/toolkit";

/* export const getItineraries = createAction('get_itineraries', (name) =>{
    return{
        payload: name
    }
}) */

export const setItineraries = createAction('set_itineraries', (obj) =>{
    return{
        payload: obj
    }
})
export default { setItineraries}