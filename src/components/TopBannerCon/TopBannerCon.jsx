import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import TopBanner1 from "../TopBanner1/TopBanner1";

export default () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
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
