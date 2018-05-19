import React from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import FoodItem from "./FoodItem";
import { addItem, removeItem,deleteItem } from "../redux/actions/cartActions";

class FoodCard extends React.Component {
  state = {
    items: [...this.props.items]
  };

  componentWillReceiveProps(props){
    this.setState(()=>({
      items:[...this.props.items]
    }))
  }

  incrementItem = food => {
    console.log(this.state.items);
    this.props.items.length !== 0
      ? this.props.items.map(item => {
          console.log(item.name === food.name);
          item.name === food.name
            ? this.props.dispatch(removeItem(food.name)) && this.props.dispatch(
              addItem(food.name, item.count + 1, food.price)
            )
            : this.props.dispatch(removeItem(food.name)) && this.props.dispatch(addItem(food.name, 1, food.price));
        })
      : "";
  };

  decrementItem = food => {
    console.log("decrement");
    this.props.items.length !== 0
    ? this.props.items.map(item => {
        console.log(item.name === food.name);
        item.name === food.name
          ?item.count>1? this.props.dispatch(removeItem(food.name)) && this.props.dispatch(
            deleteItem(food.name, item.count - 1, food.price)
          ):this.props.dispatch(removeItem(food.name))
          : ""
          ;
      })
    : "";
  };

  render() {
    return (
      <div className="food__card" id="all">
        {this.props.food.map(food => {
          return (
            <FoodItem
              key={uuid()}
              food={food}
              increment={this.incrementItem}
              decrement={this.decrementItem}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    food: state.food,
    items: state.items
  };
};

export default connect(mapStateToProps)(FoodCard);
