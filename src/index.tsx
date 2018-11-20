import React from 'react'
import ReactDOM from 'react-dom'
import { App } from "./components/app"

ReactDOM.render(
    <App firstName={"Bob"}
         lastName={"Bobberton"} />,
    document.getElementById('app-root')
);