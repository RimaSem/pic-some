import React, { useContext } from "react";
import Image from "../components/Image";
import { getClass } from "../utils";
import { AppContext } from "../appContext";

function Photos() {
  const { allPhotos } = useContext(AppContext);

  const photos = allPhotos.map((obj, i) => (
    <Image key={obj.id} img={obj} className={getClass(i)} />
  ));

  return <main className="photos">{photos}</main>;
}

export default Photos;
