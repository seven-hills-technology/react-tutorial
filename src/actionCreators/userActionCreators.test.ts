import {userActionTypes} from "../actionTypes/userActionTypes";
import {setUserFirstName, setUserLastName} from "./userActionCreators";

it('should return action when calling setUserFirstName', () => {
    const action = setUserFirstName("test first name");
    expect(action).toMatchObject({
        type: userActionTypes.USER_SET_FIRST_NAME,
        payload: {firstName: "test first name"}
    })
});

it('should return action when calling setUserLastName', () => {
    const action = setUserLastName("test last name");
    expect(action).toMatchObject({
        type: userActionTypes.USER_SET_LAST_NAME,
        payload: {lastName: "test last name"}
    })
});