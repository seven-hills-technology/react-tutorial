import React from 'react'
import {Link, Route, Switch} from "react-router-dom";
import {Redirect} from "react-router";

import {ConnectedAppDisplay} from "../appDisplay/appDisplay";
import {ConnectedApp} from "../app/app";

export const Routes = () => (
    <>
        <ul>
            <li><Link to="/input">Input</Link></li>
            <li><Link to="/display">Display</Link></li>
        </ul>
        <Switch>
            <Route exact path="/input" component={ConnectedApp} />
            <Route exact path="/display" component={ConnectedAppDisplay} />
            <Route>
                <Redirect to="/display" />
            </Route>
        </Switch>
    </>
);