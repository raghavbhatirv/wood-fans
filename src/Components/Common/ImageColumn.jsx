const ImageColumn = ({img, onClick, mainImage}) => {
  return (
    <div onClick={onClick} className={`bg-[#121212] filter brightness-30 border cursor-pointer transition-all ${img === mainImage && 'filter opacity-60 brightness-100  border-gray-700'}`}>
      <img
        src={img}
        className="w-[6rem] md:w-[10rem] h-auto"
      />
    </div>
  );
};

export default ImageColumn
