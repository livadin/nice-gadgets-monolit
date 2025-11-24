import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './WelcomeSlider.css';
import { useEffect, useState } from 'react';
import type { WelcomeBanner } from '../../../../types/WelcomeBanner';
import { ArrowLeftButton } from '../../../atoms/UtilityButton/ArrowLeftButton';
import { ArrowRightButton } from '../../../atoms/UtilityButton/ArrowRightButton';

const BANNERS: WelcomeBanner[] = [
  {
    id: 0,
    pathVideo: '/nice-gadgets-monolit/gadgets/img/banners/WelcomeSliderBannerPhoneVideo.MP4',
    pathImg: '/nice-gadgets-monolit/gadgets/img/banners/WelcomeSliderBannerPhoneImg.jpg',
  },
  {
    id: 1,
    pathVideo: '/nice-gadgets-monolit/gadgets/img/banners/WelcomeSliderBannerIPadVideo.MP4',
    pathImg: '/nice-gadgets-monolit/gadgets/img/banners/WelcomeSliderBannerIPadImg.jpg',
  },
  
  {
    id: 3,
    pathVideo: '/nice-gadgets-monolit/gadgets/img/banners/WelcomeSliderBannerAppleWatchVideo.MP4',
    pathImg: '/nice-gadgets-monolit/gadgets/img/banners/WelcomeSliderBannerAppleWatchImg.jpg',
  },
];

export const WelcomeSlider: React.FC = () => {
  const [isMd, setIsMd] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null,
  );

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  useEffect(() => {
    const handler = () => setIsMd(window.innerWidth >= 640);
    handler();

    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <section>
      <Swiper
        className="h-[352px] md:h-[220px] lg:h-[432px]"
        modules={[Navigation, Pagination]}
        pagination
        loop
        onSwiper={setSwiperInstance}
      >
        {BANNERS.map((banner) => {
          return (
            <SwiperSlide
              className=""
              key={banner.id}
            >
              <a
                href="#"
                className="block h-80 bg-black md:h-[189px] md:mx-[51px] lg:h-[400px]"
              >
                {isMd ?
                  (<video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full mx-auto md:w-[490px] lg:w-[1040px] object-cover "
                  >
                    <source src={banner.pathVideo} type="video/mp4" />
                  </video>
                  ) :
                  (
                  <img
                  src={banner.pathImg}
                  alt=""
                  className="h-full mx-auto md:w-[490px] lg:w-[1040px] object-cover"
                />
                  )
                } 
              </a>
            </SwiperSlide>
          );
        })}
        <div className="hidden md:inline-flex">
          <ArrowLeftButton
            className="absolute top-0 z-10 w-8 h-[189px] lg:h-[400px] bg-white-2 transition-colors duration-300"
            onClick={handlePrev}
          ></ArrowLeftButton>
          <ArrowRightButton
            className="absolute top-0 right-0 z-10 w-8 h-[189px] lg:h-[400px] bg-white-2 transition-colors duration-300"
            onClick={handleNext}
          ></ArrowRightButton>
        </div>
      </Swiper>
    </section>
  );
};
