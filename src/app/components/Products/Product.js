import React, { Component } from "react";
import PropTypes from "prop-types";
import constants from "../../data/constants";

import "./Product.scss";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idProduct: this.props.idProduct,
            imageURL: this.props.imageURL,
            brand: this.props.brand,
            name: this.props.name,
            price: this.props.price,
            qty: 0,
        };
    }
    handleQtyChange = (event) => {
        this.setState({
            qty: event.target.value,
        });
    }

    handleSubmitToCart = (event) => {
        event.preventDefault();
        if (this.state.qty !== 0) {
            this.props.handleAddToCart(
                this.state,
            );
            // alert("Product has been added to your cart!");
        } else {
            // alert("You must enter a quantity for the product!");
        }
    }

    render() {
        const modifier = (this.props.isOnCart) ? "__onCart end" : "";
        return (
            <div key={this.state.idProduct} className={`Product${modifier} medium-3 columns`}>
                {
                    (this.props.isOnCart) ?
                        (<a onClick={this.props.handleRemoveFromCart} className="remove-icon" data-position={this.props.index}>X</a>) :
                        ""
                }
                <form onSubmit={this.handleSubmitToCart}>
                    <figure>
                        <img alt="" src={this.state.imageURL} />
                    </figure>
                    <div className="Product-Description">
                        <p className="Product-Brand">{this.state.brand}</p>
                        <p className="Product-Name">{this.state.name}</p>
                    </div>
                    <div className="Product-Transaction">
                        <p className="Product-Price">{`$ ${this.state.price}.00`}</p>
                        {
                            (this.props.isOnCart) ?
                                (<input type="text" value={`x${this.props.qty}`} disabled />) :
                                (<input type="number" placeholder="0" min="0" max={this.props.qty} onChange={this.handleQtyChange} />)
                        }
                    </div>
                    {
                        (this.props.isOnCart) ? "" : (
                            <div className="Product-Button">
                                <input type="submit" value={constants.cart.ADD_TO_CART} />
                            </div>
                        )
                    }
                </form>
            </div>
        );
    }
}

Product.propTypes = {
    handleRemoveFromCart: PropTypes.func,
    idProduct: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
    imageURL: PropTypes.string.isRequired,
    handleAddToCart: PropTypes.func,
    isOnCart: PropTypes.bool,
};

Product.defaultProps = {
    handleRemoveFromCart: () => {},
    handleAddToCart: () => {},
    isOnCart: false,
};

export default Product;
