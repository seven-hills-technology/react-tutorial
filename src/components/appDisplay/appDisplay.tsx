import React from "react";
import {connect} from "react-redux";

import {State} from "../../store/state";

function mapStateToProps(state: State) {
    return {
        firstName: state.user.firstName,
        lastName: state.user.lastName
    };
}

function mapActionToProps(dispatch: any) {
    return {
    };
}

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapActionToProps>;
export type AllProps = StateProps & DispatchProps;

export const AppDisplay = (props: AllProps) => (
    <p>Hello, {props.firstName} {props.lastName}!</p>
);

export const ConnectedAppDisplay = connect(mapStateToProps, mapActionToProps)(AppDisplay);