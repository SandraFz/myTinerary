import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = 'http://localhost:8000/api/cities'

const moveCarrousel = createAction('move_carrusel', (obj) =>{
    
    return {
        payload: obj
    }
})

const getCity = createAction('get_city', (obj) =>{
    return {
        payload: obj
    }
})

const getSearch = createAction('get_search', (txt) => {
    return {
        payload: txt
    }
})

const getAllCities = createAsyncThunk('get_all_cities', async({}) => {
    try {
        const response = await axios.get(api);
        const allCities = response.data;
        /* console.log(api) */
        return allCities
    } catch (error) {
        console.log(error)
        return []
    }
})

const filter = createAsyncThunk('filter', async (txt) =>{
    console.log(txt)
    try {
            const response = await axios.get(api + (txt.txt ? `/name?name=${txt.txt}` : ''));
            const dataFilter = response.data; 
            console.log(api + (txt ? `/name?name=${txt.txt}` : ''))
            console.log(dataFilter);
            return dataFilter;
    } catch (error) {
        console.log(error)
        return []
    }
    /* return {
        payload: txt
    } */
})

export default {moveCarrousel, getCity, getSearch, filter, getAllCities}
