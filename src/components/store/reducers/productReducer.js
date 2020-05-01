import { FETCH_PRODUCTS } from '../actions/action-types/product-actions';

const initState = {
  products: [],
  error: '',
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
