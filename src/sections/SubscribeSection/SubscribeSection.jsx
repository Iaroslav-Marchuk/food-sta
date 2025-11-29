import Button from '../../components/Button/Button.jsx';
import Layout from '../../components/Layout/Layout.jsx';

function SubscribeSection() {
  return (
    <section className="mb-15">
      <Layout>
        <img src="/banan.jpg" alt="banan" className="w-full h-18 mb-4" />
        <h2 className="font-bold text-[28px] mb-5 text-(--black) leading-[1.2]">
          Subscribe To Get Special Offers
        </h2>
        <p className="text-sm text-(--black) mb-10">
          Order now and receive 10% off your first meal with Enjoy Your Favorite
          Food From Anywhere.
        </p>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full h-[42px] bg-white rounded-[30px] border-solid p-2.5 border-[0.85px] border-(--yellow-main) placeholder:text-xs placeholder:text-[#505050]"
          />
          <button
            type="submit"
            className="text-sm font-medium text-(--black) bg-(--green) rounded-[30px] px-5 py-2.5 ml-auto"
          >
            Subscribe
          </button>
        </div>
      </Layout>
    </section>
  );
}

export default SubscribeSection;
