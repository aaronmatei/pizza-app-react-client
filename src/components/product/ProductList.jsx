import React, { Component } from 'react'
import Product from './Product'
import { connect } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'


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
        if(this.props.products.length === 0){
            this.setState({
                loading: true
            })
        } 
        if (this.props.products.length > 0) {
            this.setState({
                stateProducts: this.state.stateProducts.concat(this.props.products),
                loading: false
            })  
        }


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

                            (this.state.stateProducts.length > 0 && this.state.stateProducts.map(product =>
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
        addToCart: (product) => {
            dispatch(addToCart(product))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
