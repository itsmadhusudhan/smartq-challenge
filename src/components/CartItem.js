import React from "react";

const CartItem = ({item}) => {
        return (
          <div className="cart__item">
            <p>{item.name}</p>
            <p>x {item.count}</p>
            <p>{item.price}</p>
          </div>
        );
      }

export default CartItem;
