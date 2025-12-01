function MainPic({ className = '' }) {
  return (
    <div
      className={`border-11 rounded-[50%] border-(--yellow-main) bg-(--white) ${className}`}
    >
      <img src="/img2.jpg" alt="main picture" className="rounded-[50%]" />
    </div>
  );
}

export default MainPic;
