import toast from 'react-hot-toast';
import Layout from '../../components/Layout/Layout.jsx';
import Navigation from '../../components/Navigation/Navigation.jsx';
import PrivacyList from '../../components/PrivacyList/PrivacyList.jsx';
import { useState } from 'react';

function FooterSection() {
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);

  const isValid = /^\S+@\S+\.\S+$/.test(email);
  const hasError = touched && !isValid;

  const borderClass = hasError
    ? 'border-red-400'
    : isValid
    ? 'border-green-500'
    : 'border-(--yellow-main)';

  const handleSubscribe = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Subscribed!');
      console.log(email);
      setEmail('');
      setTouched(false);
    } catch (error) {
      toast.error('Failed to subscribe: ' + error.message);
    }
  };

  return (
    <Layout
      className="relative py-15
    md:py-25"
    >
      <img
        src="/frame1.jpg"
        alt="green apple"
        className="absolute left-0 top-33
        md:hidden"
      />
      <img
        src="/frame2.jpg"
        alt="orange"
        className="absolute right-0 top-0 w-26 h-65
        md:w-40 md:h-91
        xl:hidden"
      />

      <div
        className="md:flex md:flex-col md:gap-10 
      xl:flex-row xl:gap-80 xl:items-start"
      >
        <div
          className="flex gap-11.5 mb-10
        md:gap-28.5 md:items-center md:mb-0"
        >
          <a href="./index.html">
            <svg className="w-16.5 h-13">
              <use href="/icons.svg#icon-logo"></use>
            </svg>
          </a>
          <Navigation className="flex-col mt-1 pt-1 gap-4 text-sm  [&>li>a]:py-0 md:flex-row md:gap-7" />
        </div>

        <div
          className="pb-15
        md:pb-25
        xl:flex xl:flex-col xl:pb-20 xl:justify-start"
        >
          <span className="mb-3 inline-block text-medium text-sm text-(--black)">
            Subscribe
          </span>
          <div className="flex flex-col gap-5 mb-6 md:flex-row md:items-baseline md:gap-3 md:mb-3">
            <div>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={event => {
                  setEmail(event.target.value);
                }}
                onBlur={() => {
                  setTouched(true);
                }}
                className={`w-full h-[42px] bg-white rounded-[30px] border-solid p-2.5 border-[0.85px] border-(--yellow-main) placeholder:text-xs placeholder:text-[#505050]
          md:w-70
            ${borderClass}`}
              />
              {hasError && (
                <div className="flex gap-1 items-center font-medium text-[13px] leading-[1.4] text-(--pink) pl-3">
                  <svg className="h-3 w-3">
                    <use href="/icons.svg#icon-error"></use>
                  </svg>
                  <span>Not a valid email address (example@email.com)</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              onClick={() => {
                if (!isValid) {
                  setTouched(true);
                  toast.error('Please fill field correctly!');
                } else handleSubscribe();
              }}
              className="text-sm font-medium text-(--black) bg-white rounded-[30px] border-solid border-2 border-(--dark-green) px-5 py-2.5 w-26
              
              transition-colors duration-300
              active:border-(--yellow-main) active:shadow-lg
              xl:hover:border-(--yellow-main) xl:hover:shadow-lg
              "
            >
              Subscribe
            </button>
          </div>
          <p className="text-[10px] text-(--black) inline-block md:text-xs">
            By subscribing you agree to with our{' '}
            <span className="inline-block text-(--dark-green) underline cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>

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
      <img
        src="/frame5.jpg"
        alt="fuits gruop"
        className="hidden xl:block xl:absolute xl:bottom-0 xl:left-1/2 xl:-translate-x-1/2 xl:-z-10"
      />
    </Layout>
  );
}

export default FooterSection;
