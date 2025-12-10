import { useState } from 'react';
import Layout from '../../components/Layout/Layout.jsx';
import toast from 'react-hot-toast';

function SubscribeSection() {
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
    <section id="contact" className="mb-15 md:mb-25">
      <Layout className="xl:flex xl:flex-row-reverse xl:items-center">
        <img
          src="/banan.jpg"
          alt="banan"
          className="w-40 h-18 mb-4 mx-auto
          md:w-70 md:h-34 md:mx-0 md:ml-auto
          xl:w-[608px] xl:h-[266px] xl:m-0"
        />
        <div>
          <h2
            className="font-bold text-[28px] mb-5 text-(--black) leading-[1.2]
        md:text-[42px]"
          >
            Subscribe To Get Special Offers
          </h2>
          <p
            className="text-sm text-(--black) mb-10
          md:text-base md:mb-6
          xl:w-[532px]"
          >
            Order now and receive 10% off your first meal with Enjoy Your
            Favorite Food From Anywhere.
          </p>
          <div
            className="flex flex-col gap-5
          md:flex-row md:items-baseline
          xl:gap-8"
          >
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
                className={`w-full h-[42px] bg-white rounded-[30px] border-solid p-2.5 border-[0.85px] border-(--yellow-main) placeholder:text-xs placeholder:text-[#505050] outline-none
            md:w-99
             ${borderClass}
           `}
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
              className="text-sm font-medium text-(--black) bg-(--green) rounded-[30px] px-5 py-2.5 ml-auto
            md:ml-0

            transition-colors duration-300
            active:bg-(--yellow-main) active:shadow-lg
            xl:hover:bg-(--yellow-main) xl:hover:shadow-lg
            "
            >
              Subscribe
            </button>
          </div>
        </div>
      </Layout>
    </section>
  );
}

export default SubscribeSection;
