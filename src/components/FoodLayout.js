import React from "react";
import {connect} from "react-redux";
import Navbar from "./Navbar";
import MenuList from "./MenuList";
import { fetchFoodWithRedux } from "../redux/actions/apiActions";

class FoodLayout extends React.Component {

  componentDidMount(){
    this.props.dispatch(fetchFoodWithRedux())
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <MenuList />
      </React.Fragment>
    );
  }
}

export default connect()(FoodLayout);
