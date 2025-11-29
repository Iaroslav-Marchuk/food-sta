function Card({ img, alt }) {
  return (
    <div
      className="w-70 h-70 border-11 rounded-[50%] border-(--yellow-main) bg-(--white) flex
        items-center
        justify-center
        overflow-hidden"
    >
      <img src={img} alt={alt} className="w-56 h-56 object-cover" />
    </div>
  );
}

export default Card;
