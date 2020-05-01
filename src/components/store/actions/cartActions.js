
import { 
    ADD_SHIPPING, 
    ADD_TO_CART, 
    REMOVE_FROM_CART, 
    UPDATE_CART_QUANTITY,
    REDUCE_QUANTITY,
    ADD_QUANTITY
} from './action-types/cart-actions'

//add cart action

export const addToCart = (product) => dispatch => {
  
 dispatch({
            type: ADD_TO_CART,
            payload: {
                product,
                quantity: 1
            }
        });
  
}



//  const addItemCart= (product)=>{
//     return{
//         type: ADD_TO_CART,
//         payload: {
//             product,
//             quantity: 1
//         }
//     }
// }


//remove item action
export const removeFromCart=(productId)=>{
    return{
        type: REMOVE_FROM_CART,
        payload: {
            productId: productId
        }
    }
}
//update cart quantity
export const updateCartQuantity=(productId, quantity)=>{
    return{
        type: UPDATE_CART_QUANTITY,
        payload: {
            productId,
            quantity:quantity
        }
    }
}

//reduce quantity
export const reduceItemQuantity = (productId) => {
    return {
        type: REDUCE_QUANTITY,
        payload: {
            productId:productId            
        }
    }
}
//reduce quantity
export const addItemQuantity = (productId) => {
    return {
        type: ADD_QUANTITY,
        payload: {
            productId: productId
        }
    }
}


//add shipping 
export const addShipping = (id) => {
    return {
        type: ADD_SHIPPING,
        id
    }
}

