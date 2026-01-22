import { combineReducers } from "@reduxjs/toolkit";
import { indexApi } from "./indexApi";

const rootReducer = combineReducers({
  // Reducer biasa (state lokal)

  // RTK Query API reducers
  [indexApi.reducerPath]: indexApi.reducer,
});

export default rootReducer;
