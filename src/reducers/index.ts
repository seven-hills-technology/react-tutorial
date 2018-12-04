import { combineReducers } from "redux";

import { ourListReducer } from './ourListReducer';

export default () => combineReducers({
    ourList: ourListReducer
});
