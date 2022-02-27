import { combineReducers } from "@reduxjs/toolkit";
import { reducer as auth } from "./Auth";

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
