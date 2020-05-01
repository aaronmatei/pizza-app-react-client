import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';

const initialState = {};
const middleware = [thunk];
const reducers = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store
