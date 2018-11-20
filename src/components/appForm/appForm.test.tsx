import React from 'react';
import {shallow} from 'enzyme';
import {AppForm, AppFormProps} from "./appForm";

it('renders table', () => {
    const props: AppFormProps = {
        firstName: "Jason",
        lastName: "Johnson",
        onFirstNameChange: jest.fn(),
        onLastNameChange: jest.fn()
    };

    const wrapper = shallow(
        <AppForm {...props} />
    );

    const rows = wrapper.find("tr");
    expect(rows).toHaveLength(2);

    expect(rows.at(0).find("td").at(0).text()).toBe("First name");
    expect(rows.at(0).find("td").at(1).find("input")).toHaveLength(1);

    const firstNameInput = rows.at(0).find("td").at(1).find("input").at(0);
    const mockFirstNameEvent = {target: {value: "test first name"}};
    firstNameInput.props().onChange(mockFirstNameEvent as any);
    expect(props.onFirstNameChange).toHaveBeenCalledWith("test first name");
    expect(firstNameInput.props().value).toEqual(props.firstName);

    expect(rows.at(1).find("td").at(0).text()).toBe("Last name");
    expect(rows.at(0).find("td").at(1).find("input")).toHaveLength(1);

    const lastNameInput = rows.at(1).find("td").at(1).find("input").at(0);
    const mockLastNameEvent = {target: {value: "test last name"}};
    lastNameInput.props().onChange(mockLastNameEvent as any);
    expect(props.onLastNameChange).toHaveBeenCalledWith("test last name");
    expect(lastNameInput.props().value).toEqual(props.lastName);
});