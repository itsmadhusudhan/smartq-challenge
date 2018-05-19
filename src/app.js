import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import FoodLayout from "./components/FoodLayout";
import "./styles/style.scss";
import configStore from "./redux/store/configStore";

const store = configStore();

store.subscribe(() => {
  console.log(store.getState());
});

const app = (
  <Provider store={store}>
    <FoodLayout />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
