import { createAction } from "@reduxjs/toolkit";

export const moveCarrousel = createAction('move_carrusel', (obj) =>{
    
    return {
        payload: obj
    }
})

export const getCity = createAction('get_city', (obj) =>{
    return {
        payload: obj
    }
})

export const getSearch = createAction('get_search', (txt) => {
    return {
        payload: txt
    }
})

export default {moveCarrousel, getCity}
