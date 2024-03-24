import React from "react";
import { testimonialsItems } from "./index";
import TestimonialsQuote from "../../../../assets/Images/Home/TestimonialsQuotes.png";
import TestimonialsPeanuts from "../../../../assets/Images/Home/TestimonialsPeanuts.png";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Testimonials = () => {
  return (
    <div className="max-h-[403px]  ">
      <div className="w-full pt-[50px] pb-[70px] relative  ">
        <h1 className="pb-[30px] md:pb-[50px] text-center font-[600] text-[26px] md:text-[36px]">
          Testimonials
        </h1>
        <div className="max-w-[368px] md:max-w-[1340px] m-auto md:m-0 md:ml-auto    3xl:m-auto">
          <Swiper
            id="testimonials"
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            loop={true}
            // spaceBetween={50}
            breakpoints={{
              0: {
                slidesPerView: 1.4,
                slidesPerGroup: 1,
                delay: 1000,
                // centeredSlides: true,
                spaceBetween: 10,
              },

              1224: {
                slidesPerView: 3.15,
                slidesPerGroup: 1,
                delay: 1000,
                spaceBetween: 20,
                //   spaceBetween: 20,
              },
            }}
          >
            {testimonialsItems.map((item) => (
              <SwiperSlide>
                <div className="flex  flex-col gap-[15px] md:gap-[1px] max-w-[280px]  md:max-w-[460px] p-[20px] rounded-[10px] border-[0.5px] border-neutral-300">
                  <p className="text-[11.56px] max-w-[206px] tracking-[-0.1px] md:max-w-[max-content] font-[600] md:text-[14px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus fringilla cursus urna non mollis. Praesent iaculis
                    eleifend vehicula.”
                  </p>
                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-[10px]">
                      <img
                        src={item.img}
                        className="w-[30px] h-[30px]"
                        alt=""
                      />
                      <div>
                        <p className="text-[14px] satoshi font-[500]">
                          {item.name}
                        </p>
                        <p className="text-[12px] satoshi text-neutral-400 ">
                          Customer
                        </p>
                      </div>
                    </div>
                    <div>
                      <img
                        src={TestimonialsQuote}
                        className="max-w-[60px] md:max-w-[80px] max-h-[79px]"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <img
          src={TestimonialsPeanuts}
          alt=""
          className="bottom-[-15%] right-[5%] md:bottom-[-120px] md:right-[20px] absolute max-w-[171px] max-h-[114px] md:max-h-[250px] md:max-w-[302.5px]"
        /> */}
      </div>
    </div>
  );
};

export default Testimonials;
