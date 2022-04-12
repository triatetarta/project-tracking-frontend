import { combineReducers } from "@reduxjs/toolkit";
import { reducer as auth } from "./Auth";
import { reducer as tickets } from "./Tickets";
import { reducer as header } from "./Header";
import { reducer as comment } from "./Comments";

const rootReducer = combineReducers({
  auth,
  tickets,
  header,
  comment,
});

export default rootReducer;
