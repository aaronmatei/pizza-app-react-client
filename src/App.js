import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import ProductList from './components/product/ProductList'
import CartItems from './components/cart/Cart'
import {Provider} from 'react-redux'
import store from './components/store/store'
import Checkout from './components/pages/Checkout'


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/products" component={ProductList} />
            <Route path="/my-cart" component={CartItems} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
