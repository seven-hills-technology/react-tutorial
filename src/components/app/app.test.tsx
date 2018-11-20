import React from 'react';
import {shallow} from 'enzyme';
import {AppDisplay} from "../appDisplay/appDisplay";
import {AppForm} from "../appForm/appForm";

import {App, AllProps as AppAllProps} from "./app";

it('passes name props through to AppDisplay', () => {
    const props: AppAllProps = {
        firstName: "Jason",
        lastName: "Johnson",
        actions: {
            setUserFirstName: jest.fn(),
            setUserLastName: jest.fn()
        }
    };

    const wrapper = shallow(
        <App {...props} />
    );

    expect(wrapper.find(AppDisplay)).toHaveLength(1);
    const appDisplay = wrapper.find(AppDisplay).first();
    expect(appDisplay.props()).toEqual({firstName: props.firstName, lastName: props.lastName});

    expect(wrapper.find(AppForm)).toHaveLength(1);
    const appForm = wrapper.find(AppForm).first();
    expect(appForm.props()).toMatchObject({
        firstName: props.firstName,
        lastName: props.lastName
    });
    appForm.props().onFirstNameChange("test first name");
    expect(props.actions.setUserFirstName).toHaveBeenCalledWith("test first name");
    appForm.props().onLastNameChange("test last name");
    expect(props.actions.setUserLastName).toHaveBeenCalledWith("test last name");
});