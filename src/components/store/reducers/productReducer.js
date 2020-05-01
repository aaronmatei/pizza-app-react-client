import { FETCH_PRODUCTS, FETCH_PRODUCTS_FAIL } from '../actions/action-types/product-actions'
const initState = {
  products: [],
  error: ""
};


const productReducer = (state = initState, action) => {

  switch (action.type) {
    case FETCH_PRODUCTS:      
      let fetchedProducts = action.payload.products 
      console.log(fetchedProducts)     
      return { 
        ...state,
        products: this.state.products.concat(fetchedProducts) };
    case FETCH_PRODUCTS_FAIL:
      return { ...state.products, error: action.payload };
    default:
      return state;
  }
}

export default productReducer;