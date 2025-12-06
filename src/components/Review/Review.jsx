function Review({ review, avatar, name, client }) {
  return (
    <div
      className="p-2
    md:p-3
    xl:p-3.5 xl:bg-(--white) xl:w-[500px] xl:rounded-[28px] xl:rounded-tl-none"
    >
      <div className="mb-7">
        <ul className="flex gap-1">
          <li>
            <svg className="w-4 h-4">
              <use href="/icons.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg className="w-4 h-4">
              <use href="/icons.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg className="w-4 h-4">
              <use href="/icons.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg className="w-4 h-4">
              <use href="/icons.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg className="w-4 h-4">
              <use href="/icons.svg#icon-star"></use>
            </svg>
          </li>
        </ul>
      </div>

      <p className="font-bold mb-10 text-(--black) md:text-lg">{review}</p>

      <div className="flex gap-4 w-40">
        <img src={avatar} alt={name} className="w-12 h-12 py-0.5" />
        <div
          className="relative flex flex-col gap-0.5 justify-center pr-4
          after:content-[''] 
          after:absolute 
          after:right-0 
          after:top-0 
          after:w-px
          after:h-full 
          after:bg-(--dark-green)
          after:translate-x
        "
        >
          <span className="font-medium text-sm text-(--black)">{name}</span>
          <span className="text-sm text-(--black)">{client}</span>
        </div>
      </div>
    </div>
  );
}

export default Review;
