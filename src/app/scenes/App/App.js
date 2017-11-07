import React, { Component } from "react";
import Header from "../../components/Header";
import Cart from "../../components/Cart";
import ProductList from "../../components/Products";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            cartItems: [],
            show: false,
        };
    }

    handleAddToCart = (product) => {
        const items = this.state.cartItems;
        let { total } = this.state;
        total += Number(product.qty) * Number(product.price);
        items.push(product);
        this.setState({
            cartItems: items,
            total,
            show: true,
        });
    }

    handleRemoveFromToCart = (e) => {
        const items = this.state.cartItems;
        let { total } = this.state;
        total -= (items[Number(e.target.dataset.position)].qty *
            items[Number(e.target.dataset.position)].price);
        items.splice(Number(e.target.dataset.position), 1);
        this.setState({
            cartItems: items,
            total,
        });
    }

    handleShowCart = () => {
        this.setState({
            show: !this.state.show,
        });
    }

    render() {
        return (
            <main>
                <Header />
                <Cart
                    items={this.state.cartItems}
                    total={this.state.total}
                    handleRemoveFromToCart={this.handleRemoveFromToCart}
                    handleShowCart={this.handleShowCart}
                    showCart={this.state.show}
                />
                <ProductList handleAddToCart={this.handleAddToCart} />
            </main>
        );
    }
}

export default App;
