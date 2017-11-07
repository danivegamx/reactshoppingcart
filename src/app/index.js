import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './scenes/App';

// Import Redux Store
import store from "./store/store";

// Import Styles
import "./stylesheets/index.scss";

ReactDOM.render(
    <Provider store={store}>
    	<App />
    </Provider>,
    document.getElementById('app')
);
