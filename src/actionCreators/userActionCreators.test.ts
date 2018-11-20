import {userActionTypes} from "../actionTypes/userActionTypes";
import {setUserInformation} from "./userActionCreators";

it('should return action when calling setUserInformation', () => {
    const action = setUserInformation({firstName: "test first name", lastName: "test last name"});
    expect(action).toMatchObject({
        type: userActionTypes.USER_SET_INFORMATION,
        payload: {info: {firstName: "test first name", lastName: "test last name"}}
    })
});