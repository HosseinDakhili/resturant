import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <div className="relative max-w-6xl mx-auto px-4">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="relative"
        spaceBetween={20}
        slidesPerView={1}
        
      >
        <SwiperSlide>
          <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full rounded-xl overflow-hidden">
            <img
              src="/assets/Media/Pages/Home/b1.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full rounded-xl overflow-hidden">
            <img
              src="/assets/Media/Pages/Home/b2.png"
              alt="slide"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full rounded-xl overflow-hidden">
            <img
              src="/assets/Media/Pages/Home/b3.png"
              alt="slide"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

       
      </Swiper>
    </div>
  );
}
