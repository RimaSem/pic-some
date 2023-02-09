import React from "react";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/pic-some/" element={<Photos />} />
        <Route path="/pic-some/cart" element={<Cart />} />
      </Routes>
      ;
    </div>
  );
}

export default App;
