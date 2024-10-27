import CustomSwiper from "components/Swiper/Swiper";
import { SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
import { breakpoints } from ".";

const HomeSwipers = ({ swiperContent, title, url, minHeight = "200px" }) => {
  const navigate = useNavigate();
  const [isContain, setIsContain] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  const [idx, setIdx] = useState(null);
  const [showTitle, setShowTitle] = useState(null);
  const textVariants = {
    initial: {
      opacity: 0.2,
      x: -10,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };
  const constVar = 12;
  let letVar = 12;
  letVar = 13;
  return (
    <div className="w-[90%] m-auto py-[20px] flex flex-col gap-[20px]">
      <div className="flex justify-between items-center w-[100%] m-auto">
        <h1 className="text-[20px] font-semibold">{title}</h1>
        {/* <p
          className="text-red-500 text-[14px] text-underline cursor-pointer"
          onClick={() => navigate(url)}
        >
          See All
        </p> */}
      </div>
      <CustomSwiper
        showButton={false}
        paginated
        breakpoints={breakpoints}
        swiperSlideContent={swiperContent.map((item, index) => (
          <SwiperSlide style={{ minHeight: minHeight }}>
            <div
              className="overflow-hidden rounded-md w-full shadow-1 object-cover"
              style={{
                height:
                  +minHeight.substring(0, minHeight.length - 2) + 40 + "px",
              }}
            >
              <div
                className="w-full h-full relative"
                onMouseOver={() => setShowTitle(index)}
                onMouseLeave={() => setShowTitle(null)}
              >
                <img
                  onClick={() => {
                    setIdx(index);
                    onOpen();
                  }}
                  onMouseEnter={() => setIsContain(`swiper-img-${item.img}`)}
                  onMouseLeave={() => setIsContain("")}
                  src={item.img}
                  alt={`swiper-img-${item.img}`}
                  style={{ height: minHeight }}
                  className={`transition-all duration-300 cursor-pointer !rounded-md ease-in !w-full ${
                    isContain === `swiper-img-${item.img}`
                      ? "object-contain scale-105"
                      : "object-cover scale-100"
                  }`}
                />

                {/* {showTitle === index && (
                  <motion.p
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute bottom-[20px] left-[10px] text-white text-[18px] font-medium"
                  >
                    {item.title}
                  </motion.p>
                )} */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      />
      {/* <CardModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        cardList={swiperContent}
        idx={idx}
      /> */}
    </div>
  );
};

export default HomeSwipers;
