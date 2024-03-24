import React from "react";
import useAwardModal from "../../../../../../hooks/useAwardModal";
import Modal from "../../../../../../components/templates/Modal/Modal";
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
import NextButton from "../../../../../../assets/Icons/Home/Modal/NextButton";
import PrevButton from "../../../../../../assets/Icons/Home/Modal/PrevButton";

const AwardModal = ({ modalItem }) => {
  const awardModal = useAwardModal();
  if (!modalItem) return null;

  const bodyContent = (
    <div className="flex flex-col gap-[10px] leading-[23px]">
      <div className="flex md:flex-row flex-col gap-[30px]">
        <div className="w-full md:w-[250px] relative">
          <div className="flex md:hidden flex-col gap-[5px]">
            <h1 className="text-[24px] font-[700] tracking-[-1.1px] satoshi">
              {modalItem.heading}
            </h1>
            <p className="text-neutral-300 text-[12px]">India</p>
          </div>
          <Swiper
            className="flex justify-center items-center"
            id="awards"
            style={{
              "--swiper-pagination-color": "white",
              "--swiper-pagination-bullet-inactive-color": "white",
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
            navigation={{
              nextEl: `.arrow-right`,
              prevEl: `.arrow-left`,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                delay: 1000,
                spaceBetween: 10,
              },

              1224: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                delay: 1000,
                spaceBetween: 20,
              },
            }}
          >
            {modalItem.img.map((item) => (
              <SwiperSlide style={{}}>
                <div
                  className="flex  flex-col gap-[20px] self-end items-center justify-between"
                  onClick={awardModal.onOpen}
                >
                  <div className="w-full md:w-auto md:max-w-[250px] h-[288px] object-cover relative">
                    {" "}
                    <img
                      src={item}
                      alt=""
                      className={`object-cover w-full md:max-w-[250px] h-full rounded-[10px]`}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className={`arrow-left absolute  top-[50%] translate-y-[-50%] left-[-15px] z-[999999999]`}
          >
            <PrevButton />
          </button>
          <button
            className={`arrow-right absolute top-[50%] translate-y-[-50%] right-[-15px] z-[999999999]`}
          >
            <NextButton />
          </button>
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="hidden md:flex  flex-col gap-[5px]">
            <h1 className="text-[24px] font-[700] tracking-[-1.1px] satoshi">
              {modalItem.heading}
            </h1>
            <p className="text-neutral-300 text-[12px]">India</p>
          </div>
          <p className="text-[16px] satoshi tracking-[0.5px] font-[400]">
            {modalItem.upperText}
          </p>
        </div>
      </div>
      <p className="text-[16px] satoshi tracking-[0.5px] font-[400]">
        {modalItem.middleText}
      </p>
      <p className="text-[16px] satoshi tracking-[0.5px] font-[400]">
        {modalItem.lowerText}
      </p>
    </div>
  );
  return (
    <Modal
      isOpen={awardModal.isOpen}
      onClose={awardModal.onClose}
      body={bodyContent}
    />
  );
};

export default AwardModal;
