import React, { useContext } from "react";
import Icon from "@mdi/react";
import {
  mdiHeartOutline,
  mdiPlusCircleOutline,
  mdiHeart,
  mdiCart,
} from "@mdi/js";
import { AppContext } from "../appContext";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function Image({ className, img }) {
  const [hovered, ref] = useHover();
  const { toggleFavorite, addToCart, removeFromCart, cartItems } =
    useContext(AppContext);

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <Icon
          path={mdiHeart}
          size={1}
          color="red"
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        />
      );
    } else if (hovered) {
      return (
        <Icon
          path={mdiHeartOutline}
          size={1}
          color="red"
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        />
      );
    }
  }

  function cartIcon() {
    const inCart = cartItems.some((item) => +item.id === +img.id);
    if (inCart) {
      return (
        <Icon
          path={mdiCart}
          size={1}
          className="ri-shopping-cart-fill cart"
          color="white"
          onClick={() => removeFromCart(img)}
        />
      );
    } else if (hovered) {
      return (
        <Icon
          path={mdiPlusCircleOutline}
          size={1}
          className="ri-add-circle-line cart"
          onClick={() => {
            addToCart(img);
          }}
        />
      );
    }
  }

  return (
    <div className={`${className} image-container`} ref={ref}>
      <img src={img.url} className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
