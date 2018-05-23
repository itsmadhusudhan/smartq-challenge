import React from "react";
import {connect} from "react-redux";
import Navbar from "./Navbar";
import MenuList from "./MenuList";
import { fetchFoodWithRedux } from "../redux/actions/apiActions";
import FoodCard from "./FoodCard";
import CartCard from "./CartCard";

class FoodLayout extends React.Component {

  state={
    isCleared:false
  }

  componentDidMount(){
    this.props.dispatch(fetchFoodWithRedux())
  }

  setActiveMenu=(e)=>{
    Array.from(e.target.parentElement.children).forEach(item=>item.classList.remove("active"))
    e.target.classList.add("active");
  }

  changeIsCleared=()=>{
    this.setState((prevState)=>({
      isCleared:prevState.isCleared?false:true
    }))
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="food__wrapper">
        <MenuList setActiveMenu={this.setActiveMenu} />
        <FoodCard isCleared={this.state.isCleared} changeIsCleared={this.changeIsCleared}/>
        <CartCard changeIsCleared={this.changeIsCleared}/>
        </div>
      </React.Fragment>
    );
  }
}

export default connect()(FoodLayout);
