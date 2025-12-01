import ApplePic from '../../components/ApplePic/ApplePic.jsx';
import Layout from '../../components/Layout/Layout.jsx';

function AboutSection() {
  return (
    <section className="mb-33 md:mb-47.5">
      <Layout>
        <ApplePic className="mb-15" />
        <h2 className="font-bold text-[28px] mb-7 text-(--black) md:w-[526px] md:text-[42px] md:mb-5">
          What’s Special About Our Offerings
        </h2>
        <p className="text-sm mb-8 text-(--black) leading-[1.43] md:w-[500px] md:text-base md:leading-normal md:mb-[25px]">
          With our platform, you can browse through a diverse selection of
          cuisines and local restaurants, and choose from a variety of dishes
          that cater to your specific taste buds.
        </p>
        <div className="flex flex-col gap-6 mb-7 md:flex-row md:gap-20 md:mb-5">
          <div>
            <svg className="w-12 h-12 mb-2">
              <use href="/icons.svg#icon-delivery"></use>
            </svg>
            <h3 className="font-bold text-lg text-(--black) mb-4">
              Fasest Delivery
            </h3>
            <p className="text-sm text-(--black) leading-[1.43]">
              Our advanced logistics system and dedicated delivery partners
              ensure that your meals are delivered to you within 30-minutes.
            </p>
          </div>

          <div>
            <svg className="w-12 h-12 mb-2">
              <use href="/icons.svg#icon-order"></use>
            </svg>
            <h3 className="font-bold text-lg text-(--black) mb-4">
              Easy To Order
            </h3>
            <p className="text-sm text-(--black) leading-[1.43]">
              You can browse through a wide variety of cuisines and restaurants,
              select your favorite meals, and place your order in just a few
              clicks.
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <button
            type="button"
            className="text-sm font-medium text-(--black) bg-white rounded-[30px] border-solid border-2 border-(--dark-green) px-5 py-2.5"
          >
            Order Now
          </button>
          <button
            type="button"
            className="flex items-center text-sm font-medium text-(--black)"
          >
            Read More
            <svg className="w-3.5 h-3.5 ml-1">
              <use href="/icons.svg#icon-more"></use>
            </svg>
          </button>
        </div>
      </Layout>
    </section>
  );
}

export default AboutSection;
