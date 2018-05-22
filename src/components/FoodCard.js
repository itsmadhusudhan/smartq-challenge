import React from "react";
import { connect } from "react-redux";
import { categorySelector } from "../redux/selectors/categorySelector";
import FoodCategory from "./FoodCategory";
import { addItem } from "../redux/actions/cartActions";

//NOTE:Can be a functional component

class FoodCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: []
    };
  }

  // static getDerivedStateFromProps=(prevProps,nextProps)=>{
  //   if(prevProps!==nextProps){
  //     return nextProps.isCleared
  //   }
  //   console.log(nextProps)
  // }

  incrementItem = food => {
    this.state.selectedItems.find(item => item.name === food.name)
      ? this.setState(prevState => {
          return {
            selectedItems: [
              ...prevState.selectedItems.filter(
                item => item.name !== food.name
              ),
              {
                ...prevState.selectedItems.find(
                  item => item.name === food.name
                ),
                count:
                  prevState.selectedItems.find(item => item.name === food.name)
                    .count + 1
              }
            ]
          };
        })
      : this.setState(prevState => {
          return {
            selectedItems: [...prevState.selectedItems, { ...food, count: 1 }]
          };
        });
  };

  decrementItem = food => {
     const fooditem=this.state.selectedItems.find(item => item.name === food.name);

      fooditem?fooditem.count!==1? this.setState(prevState => {
          return {
            selectedItems: [
              ...prevState.selectedItems.filter(
                item => item.name !== food.name
              ),
              {
                ...prevState.selectedItems.find(
                  item => item.name === food.name
                ),
                count:
                  prevState.selectedItems.find(item => item.name === food.name)
                    .count -1
              }
            ]
          };
        }):this.setState(prevState => {
          return {
            selectedItems: [
              ...prevState.selectedItems.filter(
                item => item.name !== food.name
              )              
            ]
          };
        })
      : ""
  };

  componentDidUpdate() {
    this.props.dispatch(addItem(this.state.selectedItems));
  }

  render() {
    return (
      <div className="food__card" id="all">
        {[
          ...new Set(
            this.props.food.map(food => {
              return food.category;
            })
          )
        ].map(category => {
          return (
            <FoodCategory
              key={category}
              category={category}
              incrementItem={food => {
                this.incrementItem(food);
              }}
              decrementItem={this.decrementItem}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    food: state.food
  };
};

export default connect(mapStateToProps)(FoodCard);
