import { initialState, StateUser } from "../store/state";
import {userActionTypes} from "../actionTypes/userActionTypes";

export function userReducer(state: StateUser = initialState.user, action: {type: string, payload: any}): StateUser {
    switch (action.type) {
        case userActionTypes.USER_SET_INFORMATION: {
            const {info} = action.payload;
            return {
                ...state,
                ...info
            };
        }
        default: {
            return state;
        }
    }
}