const Picture = ({ src }) => {
  return (
    <article className='relative'>
      <img className='w-full h-full' src={src} alt='beautiful sightings' />
      <span className='absolute bottom-5 left-5 text-white'>
        Lorem ipsum dolor sit.
      </span>
    </article>
  );
};

export default Picture;
