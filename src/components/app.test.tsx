import React from 'react';
import {shallow} from 'enzyme';
import {App} from "./app";

it('says hello', () => {

    const wrapper = shallow(
        <App />
    );

    expect(wrapper.text()).toBe("Hello!");
});