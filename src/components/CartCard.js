import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import { deleteItems } from "../redux/actions/cartActions";

const CartCard = props => {
  return (
    <div className="card__card">
      <div className="cart__card--header">
        Your Cart<i
          className="fas fa-trash icon"
          onClick={() => {
            props.dispatch(deleteItems());
          }}
        />
      </div>
      <div className="cart__items">
        {props.items.map(item => {
          return <CartItem item={item} />;
        })}
      </div>
      <p className="cart__total">
        Total: <span>25</span>
      </p>
      <button className="cart__checkout">Checkout</button>
    </div>
  );
};

const mapSateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapSateToProps)(CartCard);
