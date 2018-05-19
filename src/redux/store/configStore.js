import { applyMiddleware, combineReducers, createStore } from "redux";
import { foodApiMiddleware } from "../middleware/foodApiMiddleware";
import foodReducer from "../reducers/foodReducer";
import cartReducer from "../reducers/cartReducer";

export default () => {
  const store = createStore(
    combineReducers({ food: foodReducer,items:cartReducer }),
    applyMiddleware(foodApiMiddleware)
  );
  return store;
};
