function ApplePic({ className = '' }) {
  return (
    <div
      className={`relative w-70 h-70 flex items-center justify-center ${className}`}
    >
      {/*  stroke-green-500 */}
      <svg className="absolute inset-0 z-10 w-70 h-70">
        <use href="/icons.svg#icon-frame"></use>
      </svg>

      {/*  fill-red-300 */}
      <svg className="absolute z-20 w-64 h-64 fill-none">
        <use href="/icons.svg#icon-background"></use>
      </svg>

      <img
        src="/apple.png"
        alt="green apple"
        className="absolute left-1/2 bottom-13 -translate-x-1/2 z-40"
      />

      <img
        src="/Ellipse 4.png"
        alt="shadow"
        className="absolute left-1/2 bottom-[calc(52px-0.5*44px)] -translate-x-1/2 z-30 w-32 h-11"
      />
    </div>
  );
}

export default ApplePic;
