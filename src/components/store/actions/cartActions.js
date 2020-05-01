import {
  ADD_SHIPPING,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  REDUCE_QUANTITY,
  ADD_QUANTITY,
} from './action-types/cart-actions';



//add to cart action
export const addToCart = (product) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: {
      product,
      quantity: 1,
    },
  });
};


//remove item from cart
export const removeFromCart = (productId) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      productId: productId,
    },
  });
};


//update cart quantity

export const updateCartQuantity = (productId, quantity) => (dispatch) => {
  dispatch({
    type: UPDATE_CART_QUANTITY,
    payload: {
      productId,
      quantity: quantity,
    },
  });
};


//reduce quantity

export const reduceItemQuantity = (productId) => (dispatch) => {
  dispatch({
    type: REDUCE_QUANTITY,
    payload: {
      productId: productId,
    },
  });
};



//reduce quantity
export const addItemQuantity = (productId) => (dispatch) => {
  dispatch({
    type: ADD_QUANTITY,
    payload: {
      productId: productId,
    },
  });
};



//add shipping
export const addShipping = (id) => (dispatch) => {
  dispatch({
    type: ADD_SHIPPING,
    id,
  });
};
