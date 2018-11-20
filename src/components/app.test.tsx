import React from 'react';
import {shallow} from 'enzyme';
import {App, AppProps} from "./app";

it('says hello to jason', () => {
    const props: AppProps = {
        firstName: "Jason",
        lastName: "Johnson"
    };

    const wrapper = shallow(
        <App firstName={props.firstName}
             lastName={props.lastName} />
    );

    expect(wrapper.text()).toBe("Hello, Jason Johnson!");
});

it('says hello to jason with props spread', () => {
    const props: AppProps = {
        firstName: "Jason",
        lastName: "Johnson"
    };

    const wrapper = shallow(
        <App {...props} />
    );

    expect(wrapper.text()).toBe("Hello, Jason Johnson!");
});