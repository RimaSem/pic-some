import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../appContext";

function Header() {
  const { cartItems } = useContext(AppContext);
  return (
    <header>
      <h2>
        <Link to="/pic-some/">Pic Some</Link>
      </h2>
      <Link to="/pic-some/cart">
        <i
          className={`ri-shopping-cart-${
            cartItems.length > 0 ? "fill" : "line"
          } ri-fw ri-2x`}
        ></i>
      </Link>
    </header>
  );
}

export default Header;
