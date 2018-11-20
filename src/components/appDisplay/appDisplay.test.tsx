import React from 'react';
import {shallow} from 'enzyme';
import {AppDisplay, AppProps} from "./appDisplay";

it('says hello to jason', () => {
    const props: AppProps = {
        firstName: "Jason",
        lastName: "Johnson"
    };

    const wrapper = shallow(
        <AppDisplay firstName={props.firstName}
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
        <AppDisplay {...props} />
    );

    expect(wrapper.text()).toBe("Hello, Jason Johnson!");
});