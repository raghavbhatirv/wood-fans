const ImageColumn = ({img, onClick, mainImage}) => {
  return (
    <div onClick={onClick} className={`bg-[#121212] filter brightness-50 transition-all ${img === mainImage && 'filter brightness-100'}`}>
      <img
        src={img}
        className="w-[6rem] md:w-[10rem] h-auto"
      />
    </div>
  );
};

export default ImageColumn
