import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

function MainPic({ className = '' }) {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        direction={'horizontal'}
        loop={true}
        allowTouchMove={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={600}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        }}
        className={`mainpic-swiper border-14 rounded-[50%] border-(--yellow-main) bg-(--white)
        xl:border-26 overflow-hidden
        ${className}`}
      >
        <SwiperSlide className="swiper-slide">
          <img src="/img1.jpg" alt="main picture" className="rounded-[50%]" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/img2.jpg" alt="main picture" className="rounded-[50%]" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/img3.jpg" alt="main picture" className="rounded-[50%]" />
        </SwiperSlide>
      </Swiper>
      <div
        className="custom-swiper-button-next stroke-(--black) hover:stroke-(--dark-green)
                      absolute -left-3 top-1/2 -translate-y-1/2 z-20
                      w-9 h-7 bg-white/90 rounded-sm shadow-xl
                      flex items-center justify-center
                      cursor-pointer select-none
                      hover:scale-110
                      active:scale-95 active:shadow-2xl
                      transition-all duration-200
                      xl:hidden"
      >
        <svg className="w-3 h-5">
          <use href="/icons.svg#icon-arr-prev"></use>
        </svg>
      </div>

      <div
        className="custom-swiper-button-next stroke-(--black) hover:stroke-(--dark-green)
                      absolute -right-3 top-1/2 -translate-y-1/2 z-20
                      w-9 h-7 bg-white/90 rounded-sm shadow-xl
                      flex items-center justify-center
                      cursor-pointer select-none
                      hover:scale-110
                      active:scale-95 active:shadow-2xl
                      transition-all duration-200
                      xl:hidden"
      >
        <svg className="w-3 h-5">
          <use href="/icons.svg#icon-arr-next" />
        </svg>
      </div>
    </div>
  );
}

export default MainPic;
