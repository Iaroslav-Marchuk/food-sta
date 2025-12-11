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
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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
        className="custom-swiper-button-prev
                      absolute left-4 top-1/2 -translate-y-1/2 z-20
                      w-12 h-12 bg-white/90 rounded-full shadow-xl
                      flex items-center justify-center text-3xl font-light
                      cursor-pointer select-none
                      hover:bg-(--yellow-main) hover:scale-110
                      transition-all duration-200"
      >
        Previous
      </div>

      <div
        className="custom-swiper-button-next
                      absolute right-4 top-1/2 -translate-y-1/2 z-20
                      w-12 h-12 bg-white/90 rounded-full shadow-xl
                      flex items-center justify-center text-3xl font-light
                      cursor-pointer select-none
                      hover:bg-(--yellow-main) hover:scale-110
                      transition-all duration-200"
      >
        Next
      </div>
    </div>
  );
}

export default MainPic;
