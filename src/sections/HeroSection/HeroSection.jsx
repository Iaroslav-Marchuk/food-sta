import Button from '../../components/Button/Button.jsx';
import Layout from '../../components/Layout/Layout.jsx';
import MainPic from '../../components/MainPic/MainPic.jsx';

function HeroSection() {
  return (
    <section className="mt-15 mb-22.5">
      <Layout>
        <h1 className="font-bold text-[28px] mb-7 text-(--black)">
          Enjoy Your Favorite Food From Anywhere
        </h1>
        <p className="text-sm mb-8 text-(--black) leading-[1.43]">
          With just a few clicks, you can have your favorite meals delivered
          straight to your doorstep, no matter where you are. Order now and
          enjoy a hassle-free and delicious meal from the comfort of your own
          home.
        </p>
        <search></search>
        <MainPic className="hidden" />
        <button
          type="button"
          className="text-[14px] font-medium text-(--black) bg-(--green) rounded-full px-4.5 py-1.5  "
        >
          Order now
        </button>
      </Layout>
    </section>
  );
}

export default HeroSection;
