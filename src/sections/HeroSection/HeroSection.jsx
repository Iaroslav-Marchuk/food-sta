import Layout from '../../components/Layout/Layout.jsx';
import MainPic from '../../components/MainPic/MainPic.jsx';

function HeroSection() {
  return (
    <section className="mt-15 mb-22.5 xl:mt-0 xl:mb-14">
      <Layout className="md:relative">
        <h1
          className="font-bold text-[28px] mb-7 text-(--black)
        md:w-[536px] md:text-[42px] md:mb-11
        xl:w-[511px] xl:text-[48px] xl:leading-[1.2] xl:mb-7 xl:pt-40"
        >
          Enjoy Your Favorite Food From Anywhere
        </h1>
        <p
          className="text-sm mb-8 text-(--black) leading-[1.43]
        md:w-[336px] md:text-base md:mb-10 md:leading-normal
        xl:w-[511px]"
        >
          With just a few clicks, you can have your favorite meals delivered
          straight to your doorstep, no matter where you are. Order now and
          enjoy a hassle-free and delicious meal from the comfort of your own
          home.
        </p>

        <MainPic
          className="hidden
        md:block w-80 h-80 absolute bottom-0 right-8
        xl:w-145 xl:h-145 xl:right-7.5 xl:bottom-3.5
        "
        />
        <button
          type="button"
          className="text-sm font-medium text-(--black) bg-(--green) rounded-full px-4.5 py-1.5 mb-18
          xl:mb-40"
        >
          Order now
        </button>
      </Layout>
    </section>
  );
}

export default HeroSection;
