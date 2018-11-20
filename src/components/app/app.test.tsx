import React from 'react';
import {shallow} from 'enzyme';

import {AppFormData, ConnectedAppForm} from "../appForm/appForm";
import {App, AllProps as AppAllProps} from "./app";
import {FormSubmitHandler} from "redux-form";

it('passes name props through to AppDisplay', () => {
    const props: AppAllProps = {
        actions: {
            setUserInformation: jest.fn()
        }
    };

    const wrapper = shallow(
        <App {...props} />
    );

    expect(wrapper.find(ConnectedAppForm)).toHaveLength(1);
    const appForm = wrapper.find(ConnectedAppForm).first();
    const mockValuesPayload = {firstName: "test first name", lastName: "test last name"};
    (appForm.props().onSubmit as FormSubmitHandler<AppFormData>)(mockValuesPayload, null, null);
    expect(props.actions.setUserInformation).toHaveBeenCalledWith(mockValuesPayload, null, null);
});