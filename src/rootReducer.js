import { combineReducers } from "@reduxjs/toolkit";
import { reducer as auth } from "./Auth";
import { reducer as tickets } from "./Tickets";
import { reducer as header } from "./Header";

const rootReducer = combineReducers({
  auth,
  tickets,
  header,
});

export default rootReducer;
