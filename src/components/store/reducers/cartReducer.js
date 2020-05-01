import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    REDUCE_QUANTITY,
    ADD_QUANTITY,
    
} from '../actions/action-types/cart-actions'

const initState = {
    cart: []
}
const cartReducer= (state = initState,action)=>{
    let cart = state.cart
   switch(action.type){
       case ADD_TO_CART:
           let existing_item = cart.find(item => item.product.id === action.payload.productId)
           if(existing_item){
               existing_item.quantity +=1
           }
           cart.push(action.payload)
           return {
               ...state,
               cart: cart
           }
        case REMOVE_FROM_CART:        
           return {
               ...state,
               cart: cart.filter(item => item.product.id !== action.payload.productId)
           }
       case ADD_QUANTITY:
           let itm = cart.find(item => item.product.id === action.payload.productId)
           let newCrt = cart.filter(item => item.product.id !== action.payload.productId)
           itm.quantity += 1
           newCrt.push(itm)
           return {
               ...state,
               cart: newCrt

           }   
        case REDUCE_QUANTITY:
            let itemm = cart.find(item=>item.product.id === action.payload.productId)
            let newCartt = cart.filter(item=>item.product.id !== action.payload.productId)
            if(itemm.quantity === 1){
                return {
                    ...state,
                    cart: newCartt
                }
            }
            itemm.quantity -=1           
            newCartt.push(itemm)           
            return {
                ...state,
                cart: newCartt
                
            }
        case UPDATE_CART_QUANTITY:
            let item = cart.find(item=>item.product.id === action.payload.productId)
            let newcart = cart.filter(item=>item.product.id !== action.payload.productId)
            item.quantity = action.payload.quantity;
            newcart.push(item)
            return {
                ...state,
                cart: newcart
            }

        default:
            return state
           
   }
    
   
    
}

export default cartReducer
