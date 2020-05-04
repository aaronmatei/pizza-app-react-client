import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    REDUCE_QUANTITY,
    ADD_QUANTITY,
} from '../actions/action-types/cart-actions';

const initState = {
    cart: [],
};
const cartReducer = (state = initState, action) => {
    let cart = state.cart;
    switch (action.type) {
        case ADD_TO_CART:
            let existing_item = cart.find(
                (item) => item.product.id === action.payload.productId
            );
            let fresh_cart = cart.filter(
                (item) => item.product.id !== action.payload.productId
            );
            if (existing_item) {
                existing_item.quantity += 1;
                fresh_cart.push(existing_item);
                return {
                    ...state,
                    cart: fresh_cart,
                };
            }
            cart.push(action.payload);
            return {
                ...state,
                cart: cart,
            };
        case REMOVE_FROM_CART:
            let freshCart = cart.filter(
                (item) => item.product.id !== action.payload.productId
            );
            return {
                ...state,
                cart: freshCart,
            };
        case ADD_QUANTITY:
            let itm = cart.find(
                (item) => item.product.id === action.payload.productId
            );
            let itmQuantity = itm.product.quantity;
            let newCrt = cart.filter(
                (item) => item.product.id !== action.payload.productId
            );

            if (itm.quantity > itmQuantity) {
                alert(
                    `Item quantity has exceeded available products. Only ${itmQuantity} available for now`
                );
                itm.quantity = itmQuantity;
                newCrt.push(itm);
                return {
                    ...state,
                    cart: newCrt,
                };
            }
            itm.quantity += 1;
            newCrt.push(itm);
            return {
                ...state,
                cart: newCrt,
            };
        case REDUCE_QUANTITY:
            let itemm = cart.find(
                (item) => item.product.id === action.payload.productId
            );
            let newCartt = cart.filter(
                (item) => item.product.id !== action.payload.productId
            );
            if (itemm.quantity === 1) {
                return {
                    ...state,
                    cart: newCartt,
                };
            }
            itemm.quantity -= 1;
            newCartt.push(itemm);
            return {
                ...state,
                cart: newCartt,
            };
        case UPDATE_CART_QUANTITY:
            let item = cart.find(
                (item) => item.product.id === action.payload.productId
            );
            let newcart = cart.filter(
                (item) => item.product.id !== action.payload.productId
            );
            item.quantity = action.payload.quantity;
            newcart.push(item);
            return {
                ...state,
                cart: newcart,
            };

        default:
            return state;
    }
};

export default cartReducer;
