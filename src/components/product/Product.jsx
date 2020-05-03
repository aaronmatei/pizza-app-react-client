import React, { Component } from 'react'


class Product extends Component {
    state = {
        incart: this.props.inCart
    }

    addToCart = () => {
        this.props.addToCart(this.props.product)        
        this.setState({
            inCart: true
        })
    }
    render() {
        const { product } = this.props
        const { incart } = this.state
        return (
            <div className="col-md-3">
                <figure className="card card-product">
                    <div className="img-wrap">
                        <img className="rounded float-left" src={`./images/` + product.image} alt="cartitem" width="100%" height="100%" />
                    </div>
                    <figcaption className="info-wrap">
                        <h4 className="title">{product.name}</h4>
                        <p className="desc">{product.description}</p>
                    </figcaption>
                    <div className="bottom-wrap">
                        {
                            incart ? (
                                <span className="btn btn-success">Added to cart</span>

                            ) : (
                                    <button className="btn btn-sm btn-primary float-right" onClick={this.addToCart}>Add to Cart</button>

                                )
                        }

                        <div className="price-wrap h5">

                            <span className="price-new">${product.price}</span>
                        </div>
                    </div>
                </figure>
            </div>
        )
    }
}

export default Product
