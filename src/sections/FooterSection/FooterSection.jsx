import Button from '../../components/Button/Button.jsx';
import Layout from '../../components/Layout/Layout.jsx';
import Navigation from '../../components/Navigation/Navigation.jsx';
import PrivacyList from '../../components/PrivacyList/PrivacyList.jsx';

function FooterSection() {
  return (
    <Layout className="relative pt-16 pb-15">
      <img
        src="/frame1.jpg"
        alt="green apple"
        className="absolute left-0 top-16"
      />
      <img src="/frame2.jpg" alt="orange" className="absolute right-0 top-0" />

      <div className="flex gap-11.5 mb-10">
        <a href="./index.html">
          <svg className="w-16.5 h-13">
            <use href="/icons.svg#icon-logo"></use>
          </svg>
        </a>
        <Navigation className="flex-col gap-5 [&>li>a]:py-0" />
      </div>

      <div>
        <span className="mb-3 inline-block text-medium text-sm text-(--black)">
          Subscribe
        </span>
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full h-[42px] bg-white rounded-[30px] border-solid p-2.5 border-[0.85px] border-(--yellow-main) placeholder:text-xs placeholder:text-[#505050] mb-5"
        />
        <button
          type="submit"
          className="text-sm font-medium text-(--black) bg-white rounded-[30px] border-solid border-2 border-(--dark-green) px-5 py-2.5 mb-6"
        >
          Subscribe
        </button>
      </div>
      <p className="text-[10px] text-(--black) mb-10 inline-block">
        By subscribing you agree to with our{' '}
        <span className="inline-block text-(--dark-green) underline cursor-pointer">
          Privacy Policy
        </span>
      </p>
      <PrivacyList />
      <p className="block text-[10px] text-(--black) mt-10 text-center">
        2022 FoodSta. All right reserved.
      </p>
      <img
        src="/frame3.jpg"
        alt="fruits"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10"
      />
    </Layout>
  );
}

export default FooterSection;
