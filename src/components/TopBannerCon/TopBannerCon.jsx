import React, { useRef } from "react";
import { connect } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import TopBanner1 from "../TopBanner1/TopBanner1";
import { navOrigin, navChange } from "../../actions/NavStyleChange.js";
import useIntersect from "../../helper/useIntersect.js";

const TopBannerCon = ({ navOrigin, navChange }) => {
  const ref = useRef();
  const entry = useIntersect(ref, { rootMargin: "-100px 0px 0px 0px" });
  if (entry.isIntersecting) {
    navOrigin();
  } else {
    navChange();
  }
  return (
    <Swiper
      ref={ref}
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

const mapDispatchToProps = (dispatch) => {
  return {
    navOrigin: () => {
      dispatch(navOrigin());
    },
    navChange: () => {
      dispatch(navChange());
    },
  };
};

export default connect(null, mapDispatchToProps)(TopBannerCon);
