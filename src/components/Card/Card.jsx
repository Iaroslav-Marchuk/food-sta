function Card({ img, alt }) {
  return (
    <div
      className="
      group
      w-70 h-70 border-11 rounded-[50%] border-(--yellow-main) bg-(--white) flex
        items-center
        justify-center
        overflow-hidden
        md:w-84 md:h-84 md:border-14
        xl:w-98.5 xl:h-98.5 xl:border-16

        transition-colors duration-300 
        active:border-(--green)
        xl:group-hover:shadow-lg xl:hover:border-(--green)
        "
    >
      <img
        src={img}
        alt={alt}
        className="
        w-56 h-56 object-cover
        md:w-67 md:h-67
        xl:w-79 xl:h-79

        transition-scale duration-300
        group-active:scale-105
        xl:group-hover:scale-105"
      />
    </div>
  );
}

export default Card;
