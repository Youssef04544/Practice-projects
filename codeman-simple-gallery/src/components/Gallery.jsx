import Picture from "./Picture";
import React, { useState } from "react";
import ThumbPicture from "./ThumbPicture";
const Gallery = () => {
  const [currentThumbSrc, setCurrentThumbSrc] = useState("");
  const [isThumbClicked, setIsThumbClicked] = useState(false);
  const handleThumbClick = (imgSrc) => {
    setCurrentThumbSrc(imgSrc);
    setIsThumbClicked(true);
  };
  let pictureIndexArray = [];
  for (let i = 1; i < 13; i++) {
    pictureIndexArray.push(i);
  }
  return (
    <>
      {isThumbClicked && <ThumbPicture src={currentThumbSrc} />}
      <div className='flex flex-col sm:grid sm:grid-cols-3'>
        {pictureIndexArray.map((pictureIndex) => {
          return (
            <Picture
              src={`../assets/0${pictureIndex}.jpg`}
              key={pictureIndex}
              handleOnClick={handleThumbClick}
            />
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
