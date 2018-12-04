import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import createRootReducer from '../reducers';
import {State} from "./state";

export type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
}

export function configureStore(initialState?: RecursivePartial<State>) {
    const middleware = [
        thunk
    ];

    return createStore(
        createRootReducer(),
        initialState as any,
        composeWithDevTools(
            applyMiddleware(...middleware)
        )
    );
}