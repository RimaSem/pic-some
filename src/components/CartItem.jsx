import React, { useContext, useState } from "react";
import { AppContext } from "../appContext";

function CartItem({ item }) {
  const { removeFromCart } = useContext(AppContext);
  const [hoverClass, setHoverClass] = useState("line");

  return (
    <div className="cart-item">
      <i
        onMouseEnter={() => setHoverClass("fill")}
        onMouseLeave={() => setHoverClass("line")}
        className={`ri-delete-bin-${hoverClass}`}
        onClick={() => removeFromCart(item)}
      ></i>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
