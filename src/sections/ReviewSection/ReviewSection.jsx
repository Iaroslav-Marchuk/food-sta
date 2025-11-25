import Review from '../../components/Review/Review.jsx';

function ReviewSection() {
  return (
    <div>
      <h2>What our Customers Say</h2>
      <p>
        Don't just take our word for it - see what our satisfied customers have
        to say
      </p>
      <div>
        <Review
          review={
            'The Best app I have used to order food in a while, so many options to choose from too, I would recommend to a freind, No questions asked'
          }
          avatar={'/public/customer1.jpg'}
          name={'Sumith Shah'}
        />
        <Review
          review={
            'The ease with which I can just go in and order what i want was amazing, It has been a very pleasant experience ordering from this app'
          }
          avatar={'/public/customer2.jpg'}
          name={'Sumith Shah'}
        />
      </div>
    </div>
  );
}

export default ReviewSection;
