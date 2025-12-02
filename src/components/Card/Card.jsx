function Card({ img, alt }) {
  return (
    <div
      className="w-70 h-70 border-11 rounded-[50%] border-(--yellow-main) bg-(--white) flex
        items-center
        justify-center
        overflow-hidden
        md:w-84 md:h-84 md:border-14"
    >
      <img
        src={img}
        alt={alt}
        className="w-56 h-56 object-cover md:w-67 md:h-67 "
      />
    </div>
  );
}

export default Card;
