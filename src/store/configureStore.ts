import {applyMiddleware, createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from '../reducers';
import { State } from "./state";

export type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
}

export function configureStore(initialState?: RecursivePartial<State>) {
    const middleware = [
        reduxThunk
    ];

    return createStore(
        rootReducer,
        initialState, 
        composeWithDevTools(
            applyMiddleware(...middleware)
        )
    );
}