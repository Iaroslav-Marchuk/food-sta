function Review({ review, avatar, name }) {
  return (
    <div>
      {review}
      <div>
        <img src={avatar} width="48" height="48" alt="Sumith Shah" />
        {name}
      </div>
    </div>
  );
}

export default Review;
