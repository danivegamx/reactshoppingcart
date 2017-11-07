import React, { Component } from "react";
import PropTypes from "prop-types";
import constants from "../../data/constants";
import Product from "../Products/Product";

import "./Cart.scss";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items,
        };
    }

    render() {
        return (
            <div>
                <section className="Cart">
                    <div className="Cart-Wrapper row">
                        <strong>{`${constants.cart.TOTAL}:`}</strong>{`$ ${this.props.total}.00`}
                        <div className="Cart-Button" onClick={this.props.handleShowCart}>
                            <img src="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/png/512/bag.png" alt="Basket" />
                            <span className="Cart-Indicator">{this.props.items.length}</span>
                        </div>
                    </div>
                </section>
                {
                    (this.props.showCart) ?
                        (
                            <article className="Cart-list row">
                                <div className="Cart-list-wrapper row">
                                    {
                                        (this.state.items.length !== 0) ?
                                            (this.state.items.map(
                                                (item, index) => (
                                                    <Product
                                                        index={index}
                                                        key={item.idProduct}
                                                        idProduct={item.idProduct}
                                                        name={item.name}
                                                        brand={item.brand}
                                                        price={item.price}
                                                        qty={Number(item.qty)}
                                                        imageURL={item.imageURL}
                                                        handleRemoveFromCart={
                                                            this.props.handleRemoveFromToCart
                                                        }
                                                        isOnCart
                                                    />
                                                ),
                                            )) : "You don't have any items on the cart. Try adding some products!"
                                    }
                                </div>
                            </article>
                        ) : ""
                }
            </div>
        );
    }
}

Cart.propTypes = {
    handleRemoveFromToCart: PropTypes.func.isRequired,
    handleShowCart: PropTypes.func.isRequired,
    showCart: PropTypes.bool.isRequired,
    total: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Cart;
