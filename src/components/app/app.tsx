import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {FormSubmitHandler} from "redux-form";

import {State} from "../../store/state";

import {AppDisplay} from "../appDisplay/appDisplay";
import {AppFormData, ConnectedAppForm} from "../appForm/appForm";
import {setUserInformation} from "../../actionCreators/userActionCreators";

function mapStateToProps(state: State) {
    return {
        firstName: state.user.firstName,
        lastName: state.user.lastName
    };
}

function mapActionToProps(dispatch: any) {
    return {
        actions: bindActionCreators({setUserInformation}, dispatch)
    };
}

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapActionToProps>;
export type AllProps = StateProps & DispatchProps;

export const App = (props: AllProps) => (
    <>
        <AppDisplay firstName={props.firstName}
                    lastName={props.lastName} />
        <ConnectedAppForm onSubmit={props.actions.setUserInformation as FormSubmitHandler<AppFormData>} />
    </>
);

export const ConnectedApp = connect(mapStateToProps, mapActionToProps)(App);