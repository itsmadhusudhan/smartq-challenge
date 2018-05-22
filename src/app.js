import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import FoodLayout from "./components/FoodLayout";
import "./styles/style.scss";
import configStore from "./redux/store/configStore";
import { addItem } from "./redux/actions/cartActions";

const store = configStore();

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(addItem("chicken",2,25))

const app = (
  <Provider store={store}>
    <FoodLayout />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
