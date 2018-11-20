import {userActionTypes} from "../actionTypes/userActionTypes";
import {Dispatch} from "redux";
import {State} from "../store/state";

export const setUserInformation = (info: {firstName: string, lastName: string}) => async (dispatch: Dispatch<any>, getState: () => State) => {
    await new Promise(resolve => window.setTimeout(() => resolve(), 2000));
    dispatch({
        type: userActionTypes.USER_SET_INFORMATION,
        payload: {info}
    });
};