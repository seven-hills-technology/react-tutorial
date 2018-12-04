import {ourListActionTypes} from "../actionTypes/ourListActionTypes";

export const addElementToList = (newListElement: string) => async (dispatch: (params: {type: string, payload: object}) => void) => {
    dispatch({
        type: ourListActionTypes.OUR_LIST_ADD_ELEMENT,
        payload: {
            newListElement
        }
    });
};