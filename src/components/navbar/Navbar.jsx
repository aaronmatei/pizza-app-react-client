import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Navbar extends Component {
    render() {
        this.props.cartUpdated();
        let total = 0;
        this.props.cart.map(item => total += item.product.price * item.quantity)

        return (
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#ff9900" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Yummy Pizza</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Categories
                            </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                                    <Link className="dropdown-item" to="#">Another action</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="#">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="#">Contact</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

                        </form>
                    </div>

                    <div className="nav navbar-nav navbar-right">
                        <NavLink to="/my-cart">
                            <i className="fa" style={{ fontSize: '24px', color: 'white' }}>&#xf07a;</i>
                            <span className='badge badge-warning' id='lblCartCount'>{this.props.cart.length > 0 ? this.props.cart.length : 0}</span>
                        </NavLink>
                    </div>

                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
        cartUpdated: () => { return true }
    }
}

export default connect(mapStateToProps)(Navbar);