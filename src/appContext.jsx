import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

function AppContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((response) => response.json())
      .then((data) => setAllPhotos(data));
  }, []);

  function toggleFavorite(num) {
    const newArray = [];
    allPhotos.forEach((obj) =>
      +obj.id !== +num
        ? newArray.push(obj)
        : newArray.push({ ...obj, isFavorite: !obj.isFavorite })
    );
    setAllPhotos(newArray);
  }

  function addToCart(item) {
    setCartItems((prev) => [...prev, item]);
  }

  function removeFromCart(item) {
    setCartItems((prev) => prev.filter((obj) => +item.id !== +obj.id));
  }

  function emptyCart() {
    setCartItems([]);
  }

  return (
    <AppContext.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addToCart,
        cartItems,
        removeFromCart,
        emptyCart,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
