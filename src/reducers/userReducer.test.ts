import {userActionTypes} from "../actionTypes/userActionTypes";
import { initialState } from "../store/state";
import {userReducer} from "./userReducer";

it('should return initialState when calling with no action', () => {
    const testInitialState: any = void(0);
    const action: any = {type: "", payload: null};
    const newState = userReducer(testInitialState, action);
    expect(newState).toMatchObject(initialState.user);
});

it('should return modified state when calling with USER_SET_INFORMATION', () => {
    const testInitialState = {firstName: "first name 1", lastName: "last name 1"};
    const action = {type: userActionTypes.USER_SET_INFORMATION, payload: {info: {firstName: "first name 2", lastName: "last name 2"}}};
    const newState = userReducer(testInitialState, action);
    expect(newState).toMatchObject({
        firstName: "first name 2",
        lastName: "last name 2"
    });
});