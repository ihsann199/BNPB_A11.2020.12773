import { combineReducers } from "redux";
import alertReducer from "./alertReducer";

const rootReducer = combineReducers({
  alert: alertReducer,
  // tambahkan reducer lain di sini
});

export default rootReducer;
