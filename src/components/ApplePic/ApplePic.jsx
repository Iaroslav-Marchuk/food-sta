function ApplePic({ className = '' }) {
  return (
    <div
      className={`relative w-70 h-70 flex items-center justify-center
        xl:w-137.5 xl:h-137.5
        ${className}`}
    >
      <svg
        className="absolute inset-0 z-10 w-70 h-70
      xl:w-137.5 xl:h-137.5 xl:stroke-(--white)/50"
      >
        <use href="/icons.svg#icon-frame" className="xl:stroke-[0.2]"></use>
      </svg>

      <svg
        className="absolute z-20 w-64 h-64 fill-none
      xl:w-125.5 xl:h-125.5 xl:fill-(--white)"
      >
        <use href="/icons.svg#icon-background"></use>
      </svg>

      <img
        src="/apple.png"
        alt="green apple"
        className="absolute left-1/2 bottom-13 -translate-x-1/2 z-40
        xl:w-99 xl:bottom-25"
      />

      <img
        src="/Ellipse 4.png"
        alt="shadow"
        className="absolute left-1/2 bottom-[calc(52px-0.5*44px)] -translate-x-1/2 z-30 w-32 h-11
        xl:w-75 xl:h-30 xl:bottom-13.5"
      />
    </div>
  );
}

export default ApplePic;
