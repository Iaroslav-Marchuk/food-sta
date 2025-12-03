import Button from '../../components/Button/Button.jsx';
import Layout from '../../components/Layout/Layout.jsx';
import Navigation from '../../components/Navigation/Navigation.jsx';
import PrivacyList from '../../components/PrivacyList/PrivacyList.jsx';

function FooterSection() {
  return (
    <Layout className="relative py-15 md:py-25">
      <img
        src="/frame1.jpg"
        alt="green apple"
        className="absolute left-0 top-33 md:hidden"
      />
      <img
        src="/frame2.jpg"
        alt="orange"
        className="absolute right-0 top-0 w-26 h-65 md:w-40 md:h-91 "
      />

      <div className="flex gap-11.5 mb-10 md:gap-28.5">
        <a href="./index.html">
          <svg className="w-16.5 h-13">
            <use href="/icons.svg#icon-logo"></use>
          </svg>
        </a>
        <Navigation className="flex-col mt-1 pt-1 gap-4 [&>li>a]:py-0 md:flex-row md:gap-7" />
      </div>

      <span className="mb-3 inline-block text-medium text-sm text-(--black)">
        Subscribe
      </span>
      <div className="flex flex-col gap-5 mb-6 md:flex-row md:gap-3 md:mb-3">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full h-[42px] bg-white rounded-[30px] border-solid p-2.5 border-[0.85px] border-(--yellow-main) placeholder:text-xs placeholder:text-[#505050]
          md:w-70"
        />
        <button
          type="submit"
          className="text-sm font-medium text-(--black) bg-white rounded-[30px] border-solid border-2 border-(--dark-green) px-5 py-2.5 w-26"
        >
          Subscribe
        </button>
      </div>
      <p className="text-[10px] text-(--black) mb-15 inline-block md:text-xs md:mb-25">
        By subscribing you agree to with our{' '}
        <span className="inline-block text-(--dark-green) underline cursor-pointer">
          Privacy Policy
        </span>
      </p>
      <div className="flex flex-col gap-10 text-center md:flex-row md:justify-between">
        <PrivacyList />
        <p className="block text-[10px] text-(--black) md:text-xs">
          2022 FoodSta. All right reserved.
        </p>
      </div>

      <img
        src="/frame3.jpg"
        alt="fruits"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 md:hidden"
      />
      <img
        src="/frame4.jpg"
        alt="fuits gruop"
        className="hidden md:block md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:-z-10"
      />
    </Layout>
  );
}

export default FooterSection;
