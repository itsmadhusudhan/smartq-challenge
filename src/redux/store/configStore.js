import { applyMiddleware, combineReducers, createStore } from "redux";
import { foodApiMiddleware } from "../middleware/foodApiMiddleware";
import foodReducer from "../reducers/foodReducer";

export default () => {
  const store = createStore(
    combineReducers({ food: foodReducer }),
    applyMiddleware(foodApiMiddleware)
  );
  return store;
};
