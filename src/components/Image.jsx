import React, { useState, useContext } from "react";
import Icon from "@mdi/react";
import { mdiHeartOutline, mdiPlusCircleOutline, mdiHeart } from "@mdi/js";
import { AppContext } from "../appContext";

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite } = useContext(AppContext);

  function favorite() {
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

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <img src={img.url} className="image-grid" />
      {favorite()}
      {hovered && (
        <Icon
          path={mdiPlusCircleOutline}
          size={1}
          className="ri-add-circle-line cart"
        />
      )}
    </div>
  );
}

export default Image;
