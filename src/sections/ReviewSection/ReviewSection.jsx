import Layout from '../../components/Layout/Layout.jsx';
import Review from '../../components/Review/Review.jsx';

function ReviewSection() {
  return (
    <section
      className="mb-4
    md:mb-11.5
    xl:mb-44 xl:bg-(--yellow-main) xl:pt-35 xl:pb-32"
    >
      <Layout>
        <h2
          className="font-bold text-[28px] mb-5 text-(--black)
        md:text-[42px]"
        >
          What our Customers Say
        </h2>
        <p
          className="text-sm mb-8 text-(--black) leading-[1.43]
        md:text-base md:mb-11
        xl:mb-8"
        >
          Don't just take our word for it - see what our satisfied customers
          have to say
        </p>
        <div
          className="flex flex-col gap-6 md:flex-row
        md:gap-8
        xl:gap-35"
        >
          <Review
            review={
              '“The Best app I have used to order food in a while, so many options to choose from too, I would recommend to a freind, No questions asked”'
            }
            avatar={'/customer1.jpg'}
            name={'Sumith Shah'}
            client={'Some Dude'}
          />
          <Review
            review={
              '"The ease with which I can just go in and order what i want was amazing, It has been a very pleasant experience ordering from this app"'
            }
            avatar={'/customer2.jpg'}
            name={'Sumith Shah'}
            client={'Some Dude'}
          />
        </div>
      </Layout>
    </section>
  );
}

export default ReviewSection;
