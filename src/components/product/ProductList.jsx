import React, { Component } from 'react'
import Product from './Product'
import { connect } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'
import {fetchProducts} from '../store/actions/productActions'

import axios from 'axios'

let URL = "https://pizzaappbackend001.herokuapp.com/api/";


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
        // this.setState({
        //     loading: true
        // })
        // axios.get(URL+"products").then(res=>{
        //     const productss = res.data.data.filter(item => item.id <=12)
        //     console.log(productss)
        //     this.setState({
        //         stateProducts: this.state.stateProducts.concat(productss),
        //         loading: false
        //     })

        // })
        this.setState({
            loading: true
        })
        this.props.fetchProducts()

        if(this.props.products.length > 0){
            this.setState({
                stateProducts: this.props.products,
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
        },
        fetchProducts: fetchProducts(dispatch)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
