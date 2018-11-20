import {userActionTypes} from "../actionTypes/userActionTypes";

export const setUserFirstName = (firstName: string) => {
    return {
        type: userActionTypes.USER_SET_FIRST_NAME,
        payload: {firstName}
    }
};

export const setUserLastName = (lastName: string) => {
    return {
        type: userActionTypes.USER_SET_LAST_NAME,
        payload: {lastName}
    }
};