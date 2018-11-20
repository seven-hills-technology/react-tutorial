import React from 'react';
import {shallow} from 'enzyme';
import {AppForm} from "./appForm";
import {Field} from "redux-form";

it('renders table', () => {
    const props: any = {
        onSubmit: jest.fn()
    };

    const wrapper = shallow(
        <AppForm {...props} />
    );

    const rows = wrapper.find("tr");
    expect(rows).toHaveLength(3);

    expect(rows.at(0).find("td").at(0).text()).toBe("First name");
    expect(rows.at(0).find("td").at(1).find(Field)).toHaveLength(1);
    const firstNameField = rows.at(0).find("td").at(1).find(Field).at(0);
    expect(firstNameField.props()).toMatchObject({name: "firstName"});

    expect(rows.at(1).find("td").at(0).text()).toBe("Last name");
    expect(rows.at(1).find("td").at(1).find(Field)).toHaveLength(1);
    const lastNameField = rows.at(1).find("td").at(1).find(Field).at(0);
    expect(lastNameField.props()).toMatchObject({name: "lastName"});

    expect(rows.at(2).find("td").at(0).find("button")).toHaveLength(1);
});