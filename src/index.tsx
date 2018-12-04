import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux";

import { App } from "./components/app"
import {store} from "./store/store";

ReactDOM.render(
    <Provider store={store}>
        <App firstName={"Bob"}
             lastName={"Bobberton"} />
    </Provider>,
    document.getElementById('app-root')
);