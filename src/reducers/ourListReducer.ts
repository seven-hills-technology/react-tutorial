import { StateList, initialState } from "../store/state";

export function ourListReducer(state: StateList = initialState.ourList, action: {type: string, payload: any}): StateList {
    switch (action.type) {
        default: {
            return state;
        }
    }
}