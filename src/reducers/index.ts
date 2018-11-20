import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

import {userReducer} from "./userReducer";

/* from the combineReducers documentation...
 *
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 */

export const rootReducer = combineReducers({
    form: reduxFormReducer,
    user: userReducer
});
