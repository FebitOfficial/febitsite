import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import defaultBreakpoints from "./default_breakpoints";

const CustomSwiper = ({
  showButton,
  swiperSlideContent,
  breakpoints = defaultBreakpoints, // ++ no breakpoints = add default one
  paginated,
}) => (
  <div className="inventory-wrapper h-full">
    <div id="" className="relative h-full">
      <Swiper
        className="flex items-center"
        id="testimonials"
        style={{
          display: "flex !important",
          alignItems: "center !important",
          "--swiper-pagination-color": "#F05A29",
          "--swiper-pagination-bullet-inactive-color": "#F05A29",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-width": "9px",
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-horizontal-gap": "2px",
        }}
        loop
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        navigation={{
          nextEl: ".arrow-right",
          prevEl: ".arrow-left",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={paginated && { clickable: true }}
        breakpoints={breakpoints}
      >
        {swiperSlideContent}
      </Swiper>
    </div>
  </div>
);

export default CustomSwiper;
