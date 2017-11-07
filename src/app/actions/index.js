import * as mock from "../data/mock.json";

export function getProducts(products) {
    return {
        type: "GET_PRODUCTS",
        products,
    };
}

export function requestProducts() {
    return dispatch => dispatch(getProducts(mock.catalog));
}
