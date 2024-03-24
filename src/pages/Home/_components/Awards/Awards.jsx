import React, { useState } from "react";
import { awardItems, awardModalItems, getAwardImgStyles } from "./index";
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
import { isMobileSize } from "../../../../utils/ui";
import useAwardModal from "../../../../hooks/useAwardModal";
import AwardModal from "./_legos/AwardModal/AwardModal";

const Awards = () => {
  const [awardIndex, setAwardIndex] = useState(null);
  const awardModal = useAwardModal();
  console.log(awardModal.isOpen);
  const isMobile = useMediaQuery(isMobileSize);
  return (
    <>
      <div className="w-full bg-bgSecondary py-[50px]">
        <h1 className="text-center text-[26px] md:text-[36px] m-auto md:m-0 font-[600] w-[300px] md:w-full">
          We are known <span className="text-secondary">worldwide</span> for our{" "}
          <span className="text-secondary">work and quality!</span>
        </h1>
        <div className="max-w-[358px] m-auto sc800:max-w-[752px] sc1200:max-w-[1340px] mt-[20px] md:mt-[50px] md:ml-auto flex items-center   3xl:m-auto">
          <Swiper
            className="flex justify-center items-center w-full"
            id="awards"
            style={{
              "--swiper-pagination-color": "#00d6ce",
              "--swiper-pagination-bullet-inactive-color": "#00d6ce",
              "--swiper-pagination-bullet-inactive-opacity": "0.2",
              "--swiper-pagination-bullet-width": "60px",
              "--swiper-pagination-bullet-size": "8px",
              "--swiper-pagination-bullet-horizontal-gap": "0px",
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            //   loop={true}
            spaceBetween={0}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 2.3,
                slidesPerGroup: 2,
                delay: 1000,
                spaceBetween: 10,
              },

              1224: {
                slidesPerView: 4.3,
                slidesPerGroup: 4,
                delay: 1000,
                spaceBetween: 20,
              },
            }}
          >
            {awardItems.map((item, idx) => (
              <SwiperSlide
                style={{ maxHeight: "260px", paddingBottom: "80px" }}
              >
                <div
                  className="flex flex-col gap-[20px] self-end items-center justify-between"
                  onClick={() => {
                    setAwardIndex(idx);
                    awardModal.onOpen();
                  }}
                >
                  <div
                    style={{
                      maxWidth: isMobile ? `${item.mw}px` : `${item.w}px`,
                      maxHeight: isMobile ? `${item.mh}px` : `${item.h}px`,
                    }}
                  >
                    {" "}
                    <img
                      src={item.img}
                      alt=""
                      className={`object-contain w-full h-full`}
                    />
                  </div>

                  <p className="satoshi text-[9.63px] md:text-[16px] font-[700]">
                    {item.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <AwardModal
        modalItem={awardIndex !== null && awardModalItems[awardIndex]}
      />
    </>
  );
};

export default Awards;
