import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actionCreators from "../../actions";
import Product from "./Product";

class ProductList extends Component {
    componentWillMount() {
        this.props.requestProducts();
    }

    render() {
        const items = this.props.reducer.products.map(
            item => (
                <Product
                    key={item.id}
                    idProduct={item.id}
                    name={item.name}
                    brand={item.brand}
                    price={item.price}
                    qty={item.quantity}
                    imageURL={item.imageURL}
                    handleAddToCart={this.props.handleAddToCart}
                />
            ),
        );
        return (
            <section className="Products row">
                <h1>Product List</h1>
                <article className="Products-List row">
                    {items}
                </article>
            </section>
        );
    }
}

ProductList.propTypes = {
    handleAddToCart: PropTypes.func.isRequired,
    requestProducts: PropTypes.func.isRequired,
    reducer: PropTypes.shape({
        cart: PropTypes.arrayOf(
            PropTypes.shape({
                brand: PropTypes.string.isRequired,
                currency: PropTypes.string.isRequired,
                id: PropTypes.number.isRequired,
                imageURL: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                quantity: PropTypes.number.isRequired,
                type: PropTypes.string.isRequired,
            }),
        ),
        products: PropTypes.arrayOf(
            PropTypes.shape({
                brand: PropTypes.string.isRequired,
                currency: PropTypes.string.isRequired,
                id: PropTypes.number.isRequired,
                imageURL: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                quantity: PropTypes.number.isRequired,
                type: PropTypes.string.isRequired,
            }),
        ),
    }).isRequired,
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, actionCreators)(ProductList);
