import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

import { ServiceData } from '../constants';
import { FaHome, FaPaypal } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const Category = () => {
  return (
    <section className="mt-24">
      <h1 className="font-bold text-4xl text-start pl-48">Trending</h1>

      <div className="flex items-center justify-center flex-col">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="max-w-[90%] lg:max-w-[80%]"
          autoplay={{ delay: 3000 }}
        >
          {ServiceData.map((item) => (
            <SwiperSlide key={item.title}>
              <div>
                <div className="flex flex-start mb-14"></div>
                <div className="mx-12 mt-11 w-80 transform overflow-hidden mb-12 rounded-lg bg-white  shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                  <Link to={item.link}>
                    {' '}
                    <img
                      className="w-full h-[300px]"
                      src={item.backgroundImage}
                      alt={item.title}
                    />
                  </Link>
                  <div className="p-4">
                    <h2 className="flex gap-4 mb-2 text-lg font-medium  text-gray-900">
                      <FaHome /> Rock Lagos
                    </h2>
                    <p className="flex gap-4 mb-2 text-base  text-gray-700">
                      <FaLocationDot /> Lagos
                    </p>
                    <div className="flex gap-4 items-center">
                      <FaPaypal className="" />
                      <p className="mr-2 text-lg font-semibold text-gray-900">
                        $20.00
                      </p>
                      <p>-</p>
                      <p className="text-base  font-semibold text-gray-900  dark:text-gray-900">
                        $25.00
                      </p>
                    </div>
                    <Link to={'/details'}>
                      <button>Get Ticket</button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
