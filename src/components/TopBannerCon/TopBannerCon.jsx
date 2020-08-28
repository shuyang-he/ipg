import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import TopBanner1 from "../TopBanner1/TopBanner1";

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <TopBanner1 />
      </SwiperSlide>
      <SwiperSlide>
        <TopBanner1 />
      </SwiperSlide>
      <SwiperSlide>
        <TopBanner1 />
      </SwiperSlide>
    </Swiper>
  );
};
