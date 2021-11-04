import { combineReducers } from "redux";
import Reducer from "./reducers";

const rootReducer = combineReducers({
  reducers: Reducer,
});

export default rootReducer;
