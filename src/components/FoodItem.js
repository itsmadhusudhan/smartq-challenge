import React from "react";
import { connect } from "react-redux";

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
            props.decrement(props.food);
          }}
        />
        {
          // props.items.filter(item=>item.name===props.food.name).map(item=> item.count)
        }
        <i
          className="fas fa-plus icon"
          onClick={() => {
            props.increment(props.food);
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
