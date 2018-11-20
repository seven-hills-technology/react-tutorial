import { initialState, StateUser } from "../store/state";
import {userActionTypes} from "../actionTypes/userActionTypes";

export function userReducer(state: StateUser = initialState.user, action: {type: string, payload: any}): StateUser {
    switch (action.type) {
        case userActionTypes.USER_SET_FIRST_NAME: {
            const {firstName} = action.payload;
            return {
                ...state,
                firstName
            };
        }
        case userActionTypes.USER_SET_LAST_NAME: {
            const {lastName} = action.payload;
            return {
                ...state,
                lastName
            };
        }
        default: {
            return state;
        }
    }
}