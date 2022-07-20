import Picture from "./Picture";

const Gallery = () => {
  let pictureIndexArray = [];
  for (let i = 1; i < 13; i++) {
    pictureIndexArray.push(i);
  }
  return (
    <div className='flex flex-col sm:grid sm:grid-cols-3'>
      {pictureIndexArray.map((pictureIndex) => {
        return (
          <Picture src={`../assets/0${pictureIndex}.jpg`} key={pictureIndex} />
        );
      })}
    </div>
  );
};

export default Gallery;
