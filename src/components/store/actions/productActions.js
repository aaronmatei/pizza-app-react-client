import { FETCH_PRODUCTS, FETCH_PRODUCTS_FAIL } from '../actions/action-types/product-actions'

import axios from 'axios'

export const fetchProducts = async dispatch => {
    let URL = "https://pizzaappbackend001.herokuapp.com/api/";
    try {
        const response = await axios.get(URL + "products");
        const products = await response.data.data.filter(item => item.id <= 20);        
        dispatch({ type: FETCH_PRODUCTS, payload: products });
    } catch (e) {
        dispatch({ type: FETCH_PRODUCTS_FAIL, payload: e.toString() });
    }



};

