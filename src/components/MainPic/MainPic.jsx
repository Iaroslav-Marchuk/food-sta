function MainPic({ className = '' }) {
  return (
    <div
      className={`border-14 rounded-[50%] border-(--yellow-main) bg-(--white)
        xl:border-26
        ${className}`}
    >
      <img src="/img2.jpg" alt="main picture" className="rounded-[50%]" />
    </div>
  );
}

export default MainPic;
