import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/";

const reducers = combineReducers({
    reducer,
});

export default function configureStore(preloadedState) {
    return createStore(
        reducers,
        preloadedState,
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f,
        ),
    );
}
