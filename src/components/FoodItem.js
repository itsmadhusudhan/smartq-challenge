import React from "react";
import { connect } from "react-redux";
import { addItem, removeItem, deleteItem } from "../redux/actions/cartActions";

const FoodItem = props => {
  return (
    <div className="food__item">
      <span
        className={
          props.food.vegflag === "nonveg"
            ? "flag flag__red"
            : "flag flag__green"
        }
      />
      <div className="food__info">
        <h3>{props.food.name}</h3>
        <p>{props.food.description}</p>
      </div>
      <div className="food__actions">
        <i
          className="fas fa-minus icon"
          onClick={() => {
            props.decrementItem(props.food);
          }}
        />
        {props.items.filter(item => item.name === props.food.name).length !== 0
          ? props.items
              .filter(item => item.name === props.food.name)
              .map(item => item.count)
          : 0}
        <i
          className="fas fa-plus icon"
          onClick={() => {
            props.incrementItem(props.food);
            // props.incrementItem(  {
            //   availabletime: "11:00-15:30",
            //   category: "Chinese Combos",
            //   description: "",
            //   name: "Egg Chinese Combo",
            //   price: 100,
            //   vegflag: "nonveg"
            // });
          }}
        />
        <p className="food__item--price">{props.food.price}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps)(FoodItem);
