const ThumbPicture = ({ src }) => {
  return (
    <div className='sticky top-0 bottom-0 left-0 right-0 z-10'>
      <div className='absolute top-0 bottom-0 left-0 right-0 w-[100vw] h-[100vh] flex justify-center items-center bg-black bg-opacity-70'>
        <img src={src} alt='some nice thumbnail' className='w-[60%] h-[80%]' />
        <img
          src={"../assets/close.svg"}
          alt='close symbol'
          className='absolute top-[10%] right-[21%] w-10 h-10'
        />
      </div>
    </div>
  );
};

export default ThumbPicture;
