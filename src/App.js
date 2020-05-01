import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import ProductList from './components/product/ProductList'
import CartItems from './components/cart/Cart'



function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />         
          <Route path="/products" component={ProductList}/>
          <Route path="/my-cart" component={CartItems} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
