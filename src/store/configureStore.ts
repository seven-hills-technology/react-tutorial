import {applyMiddleware, createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { createRootReducer } from '../reducers';
import { State } from "./state";
import { history } from "./history";
import {routerMiddleware} from "connected-react-router";

export type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
}

export function configureStore(initialState?: RecursivePartial<State>) {
    const middleware = [
        reduxThunk,
        routerMiddleware(history)
    ];

    return createStore(
        createRootReducer(history),
        initialState, 
        composeWithDevTools(
            applyMiddleware(...middleware)
        )
    );
}