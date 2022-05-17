import React from "react";
import { useGlobalContext } from "./context";

const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, increase, decrease, toggleAmount } = useGlobalContext();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">₹{price * 100}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div style={{ display: "flex" }}>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => toggleAmount(id, "dec")}>
          <p style={{ fontSize: "20px" }}>-</p>
        </button>

        {/* amount */}
        <p className="amount">{amount}</p>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => toggleAmount(id, "inc")}>
          <p style={{ fontSize: "15px" }}>+</p>
        </button>
      </div>
    </article>
  );
};

export default CartItem;
