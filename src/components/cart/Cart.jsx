import React, { Component } from 'react'
import CartItem from './CartItem'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            cartItems: this.props.cart
        }
        
    }

    sortCartItems = (cartItems) => {
        return cartItems.sort((a,b)=>
            a.id > b.id ? 1: -1)
    }

    


    render() {
        let total = 0;
        this.sortCartItems(this.state.cartItems).map(item => total += item.product.price * item.quantity)
        const totalProice = <h4 className="text-right">Total <strong>${total.toFixed(2)}</strong></h4>
        const checkout = <Link to= "/checkout" className = "btn btn-sm btn-info float-right" > Check out</Link>
        const cart = this.props.cart.length > 0 ? (
            <div>
                <div className="panel-body">
                    {
                        this.sortCartItems(this.state.cartItems).map(item => {                          

                            return (
                                <div key={item.product.id}>
                                    <CartItem item={item} />
                                    <hr />
                                </div>
                            )
                        })
                    }

                </div>
                <div className="panel-footer">
                    <div className="row">
                        <div className="col-md-auto">
                            {totalProice} 
                        </div>
                        <div className="col-md-auto">
                            {checkout}
                            
                        </div>
                    </div>

                </div>
            </div>

        ) : (
                <div className="panel-body">
                    <div className="alert alert-warning" role="alert">
                        Your cart is empty. Click <Link to="/products" className="alert-link">products</Link> to add items to cart
                </div>
                </div>
            )

        


        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xs-12">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                <div className="panel-title">
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <h5> My Shopping Cart</h5>
                                            <hr />
                                            {
                                                this.props.cart.length > 0 ?
                                                    (<div className="row">
                                                        <div className="col-md-auto">
                                                            {totalProice}
                                                        </div>
                                                        <div className="col-md-auto">
                                                            {checkout}
                                                            
                                                        </div>
                                                    </div>
                                                    ) : null
                                            }
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {cart}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    }
}

export default connect(mapStateToProps)(Cart)
