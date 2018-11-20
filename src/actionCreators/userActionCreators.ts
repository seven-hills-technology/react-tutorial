import {userActionTypes} from "../actionTypes/userActionTypes";

export const setUserInformation = (info: {firstName: string, lastName: string}) => {
    return {
        type: userActionTypes.USER_SET_INFORMATION,
        payload: {info}
    }
};