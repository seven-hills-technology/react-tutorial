import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {State} from "../../store/state";

import {AppDisplay} from "../appDisplay/appDisplay";
import {AppForm} from "../appForm/appForm";
import {setUserFirstName, setUserLastName} from "../../actionCreators/userActionCreators";

export interface AppProps {
    firstName: string;
    lastName: string;
}

function mapStateToProps(state: State) {
    return {
        firstName: state.user.firstName,
        lastName: state.user.lastName
    };
}

function mapActionToProps(dispatch: any) {
    return {
        actions: bindActionCreators({setUserFirstName, setUserLastName}, dispatch)
    };
}

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapActionToProps>;
export type AllProps = StateProps & DispatchProps;

export const App = (props: AllProps) => (
    <>
        <AppDisplay firstName={props.firstName}
                    lastName={props.lastName} />
        <AppForm firstName={props.firstName}
                 lastName={props.lastName}
                 onFirstNameChange={firstName => props.actions.setUserFirstName(firstName)}
                 onLastNameChange={lastName => props.actions.setUserLastName(lastName)} />
    </>
);

export const ConnectedApp = connect(mapStateToProps, mapActionToProps)(App);