import { FETCH_PRODUCTS } from '../actions/action-types/product-actions'
import axios from 'axios'

const URL = 'https://pizzaappbackend001.herokuapp.com/api/';

export const fetchAllProducts = () =>  (dispatch) => {    
     return axios.get(URL + 'products').then(res => {
           const products =  res.data.data.filter((item) => item.pizza === "true")
           const productsToDisplay = products.slice(0,17)
            dispatch(fetchProducts(productsToDisplay))
      }).catch(e => {
          console.log(e)
      })
  } 




 const fetchProducts = (products) => {               
        return{ 
            type: FETCH_PRODUCTS  ,
            payload : products         
        }


};

