import React from "react";
import FoodItem from "./FoodItem";
import uuid from "uuid";
import { connect } from "react-redux";
import { categorySelector } from "../redux/selectors/categorySelector";
import { addItem, removeItem, deleteItem } from "../redux/actions/cartActions";

const FoodCategory = props => {
  return (
    <div className="food__category">
      <h2 className="food__category--heading" id={props.category}>
        {props.category}
      </h2>
      {props.food.map(food => {
        return (
          <FoodItem
            key={uuid()}
            food={food}
            incrementItem={props.incrementItem}
            decrementItem={props.decrementItem}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    food: categorySelector(state.food, props.category),
    items: state.items
  };
};

export default connect(mapStateToProps)(FoodCategory);
