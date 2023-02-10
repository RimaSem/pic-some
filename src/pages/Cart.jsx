import React, { useContext } from "react";
import { AppContext } from "../appContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems, emptyCart } = useContext(AppContext);
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  function totalPrice() {
    let sum = 0;
    cartItems.forEach((item) => (sum += 5.99));
    return sum;
  }

  function placeOrder(e) {
    e.target.textContent = "Ordering...";
    setTimeout(() => {
      console.log("Order placed!");
      e.target.textContent = "Place Order";
      emptyCart();
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">
        Total:{" "}
        {totalPrice().toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}{" "}
      </p>
      <div className="order-button">
        <button onClick={placeOrder}>Place Order</button>
      </div>
    </main>
  );
}

export default Cart;
