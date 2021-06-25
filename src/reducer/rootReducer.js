import { combineReducers } from "redux";
import { postReducer } from "./postReducer";

import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    ui: uiReducer,
    post: postReducer
});