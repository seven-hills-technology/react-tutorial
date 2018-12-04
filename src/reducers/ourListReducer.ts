import { StateList, initialState } from "../store/state";
import {ourListActionTypes} from "../actionTypes/ourListActionTypes";

export function ourListReducer(state: StateList = initialState.ourList, action: {type: string, payload: any}): StateList {
    switch (action.type) {
        case ourListActionTypes.OUR_LIST_ADD_ELEMENT: {
            return {
                ...state,
                elements: [
                    ...state.elements,
                    action.payload.newListElement
                ]
            }
        }
        default: {
            return state;
        }
    }
}