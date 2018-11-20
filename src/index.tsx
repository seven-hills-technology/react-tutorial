import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {ConnectedRouter} from "connected-react-router";

import { store } from "./store"
import { history } from "./store/history"

import {Routes} from "./components/routes/routes";

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app-root')
);