import { createStore, combineReducers } from "redux";
import alertReducer from "../reducers/alertReducer";

const rootReducer = combineReducers({
  alert: alertReducer,
});

const store = createStore(rootReducer);

export default store;
