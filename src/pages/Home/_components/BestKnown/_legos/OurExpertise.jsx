import React, { useState } from "react";
import { bestKnownTags, tagsDesc } from "../index";
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
import { useMediaQuery } from "@react-hook/media-query";
import { isIpadSize, isMobileSize } from "../../../../../utils/ui";

const OurExpertise = () => {
  const isMobile = useMediaQuery(isMobileSize);
  const isIpad = useMediaQuery(isIpadSize);
  const [idx, setIdx] = useState(0);
  return (
    <div className="max-w-[1240px] pb-[20px] md:pb-0 m-auto bg-bgSecondary flex flex-col md:flex-row gap-[20px] md:gap-[90px] items-center">
      <h1 className="text-[20px] md:text-[36px] font-[600] w-[max-content] tracking-[-1px]">
        Our Expertise
      </h1>
      <div className="flex flex-col gap-[30px]">
        <div className="flex max-w-[358px] m-auto md:m-0  md:max-w-[931px]  justify-start gap-[20px] ">
          <Swiper
            className="swiper-container-tags"
            id="tags"
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            // loop={true}
            spaceBetween={isMobile ? 30 : isIpad ? 100 : 157}
            breakpoints={{
              0: {
                slidesPerView: "auto",
                slidesPerGroup: 1,
                delay: 1000,
                // centeredSlides: true,
                spaceBetween: 50,
              },
              800: {
                slidesPerView: 4,
                slidesPerGroup: 1,
                delay: 1000,
                // centeredSlides: true,
                spaceBetween: 10,
              },

              1224: {
                slidesPerView: 5,
                slidesPerGroup: 1,
                delay: 1000,
                spaceBetween: isMobile ? 30 : isIpad ? 50 : 157,
                //   spaceBetween: 20,
              },
            }}
          >
            {bestKnownTags.map((item, index) => (
              <SwiperSlide style={{ width: "70px" }}>
                <img
                  src={item.img}
                  alt=""
                  className="h-[60px] w-[60px]"
                  onClick={() => setIdx(index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="md:pl-[10px] flex flex-col md:max-w-[90%] m-auto md:m-0 max-w-[358px] gap-[10px]">
          {" "}
          <h1 className="satoshi text-[20px] text-secondary font-[600]">
            {tagsDesc[idx].title}
          </h1>
          <p className="satoshi md:pl-[5px]">{tagsDesc[idx].desc}</p>
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
