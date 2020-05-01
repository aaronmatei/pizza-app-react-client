import React, { Component } from 'react'
import Product from './Product'
import { connect } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'
import {fetchAllProducts} from '../store/actions/productActions'




class ProductList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            stateProducts: [],
            loading: false
        }

    }

    componentDidMount() {
        this.loadProducts()

    }

    loadProducts = () => {
       
        this.setState({
            loading: true
        })
        console.log("Before Fetch Products......", this.props.products);
        this.props.fetchAllProducts() 
        console.log("After Fetch Products.......", this.props.products);  
        this.setState({
            loading: false
        })     

       
       


    }

    addItemToCart = (product) => {
        this.props.addToCart(product)
    }


    render() {

        return (
            <div className="container">
                <h2>Our Products</h2>
                <br />
                <div className="row">

                    {
                        this.state.loading ?
                            <div>Loading products......</div> :

                            (this.props.products.length > 0 && this.props.products.map(product =>
                                <Product
                                    product={product}
                                    addToCart={this.addItemToCart}
                                    inCart={this.props.cart.length > 0 && this.props.cart.filter(e => e.product.id === product.id).length > 0}
                                    key={product.id}
                                />)
                            )


                    }
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.product.products,
        cart: state.cart.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProducts: () => fetchAllProducts,
        addToCart: (product) => {
            dispatch(addToCart(product))
        },
       

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
