import axios from 'axios'
import { FETCH_PRODUCTS } from '../actions/action-types/product-actions'

let URL = 'https://pizzaappbackend001.herokuapp.com/api/';

const initState = {
  products: [],
  error: ""
};


const productReducer = (state = initState, action) => {

  switch (action.type) {
    case FETCH_PRODUCTS:
      let currentState = state.products 

      const fetchProducts = async () => {
       
        try {
          const response = await axios.get(URL + 'products')
          const products = await response.data.data.filter(item =>item.id <=20)
          currentState = currentState.concat(products)
          console.log('fp: ',products);
          console.log('cs: ', currentState);
         
        } catch (e) {
          console.log(e)
        }
        
      }
       fetchProducts()


      return {
        
        ...state,
        products: currentState
        
               
      }    
    default:
      return state;
  }
}

export default productReducer;