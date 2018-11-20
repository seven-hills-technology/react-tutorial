import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from '../reducers';
import { State } from "./state";

export type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
}

export function configureStore(initialState?: RecursivePartial<State>) {
    return createStore(
        rootReducer,
        initialState, 
        composeWithDevTools()
    );
}