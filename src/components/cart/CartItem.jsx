import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addItemQuantity,reduceItemQuantity,removeFromCart} from '../../components/store/actions/cartActions'

class CartItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: this.props.item.quantity, //quantity of the item in cart           
        }
        
    }

    handleAddToCart = (e) => {       
        this.props.addItemQuantity(this.props.item.product.id)
    }
    handleReduceFromCart = (e) => {
        this.props.reduceItemQuantity(this.props.item.product.id)
    }
    handleRemoveFromCart = (e) => {
        this.props.removeFromCart(this.props.item.product.id)
    }





    render() {
        const {item} = this.props
        return (
            <div className="row">
                <div className="">
                    <figure className="card card-product">
                        <img className="rounded float-left" src={`./images/`+item.product.image} alt="cartitem" width="300" height="200" />
                    </figure> 
                </div>    
                <div className="card col-6 col-md-4">                  
                                                     
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Name: </strong>{item.product.name}</li>
                        <li className="list-group-item"><strong>Description: </strong>{item.product.description}</li>
                        <li className="list-group-item"><strong>Price: </strong>${item.product.price}</li>
                        
                    </ul>
                    <div className="card-footer">
                        <button type="button" className="btn btn-link btn-xs" onClick={this.handleReduceFromCart}>
                            <span><i className="fas fa-minus"></i></span>
                        </button>
                            <span>{this.state.quantity}</span>
                        <button type="button" className="btn btn-link btn-xs" onClick={this.handleAddToCart}>
                            <span><i className="fas fa-plus"></i></span>
                        </button>
                        <button className="btn btn-sm btn-danger float-right" onClick={this.handleRemoveFromCart}>Remove</button>
                    </div> 
                </div>                                         
                                     
            </div>
            
               
        )
    }
}


export default connect(null, { addItemQuantity, reduceItemQuantity, removeFromCart })(CartItem)
