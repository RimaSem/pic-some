import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

function AppContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);

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

  return (
    <AppContext.Provider value={{ allPhotos, toggleFavorite }}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
