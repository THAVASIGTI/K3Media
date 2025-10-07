import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ClientSliderOne() {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={5}            
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className="slide-item"> <a href="#"><img src="images/resource/client.png" alt /></a> </SwiperSlide>
            <SwiperSlide className="slide-item"> <a href="#"><img src="images/resource/client.png" alt /></a> </SwiperSlide>
            <SwiperSlide className="slide-item"> <a href="#"><img src="images/resource/client.png" alt /></a> </SwiperSlide>
            <SwiperSlide className="slide-item"> <a href="#"><img src="images/resource/client.png" alt /></a> </SwiperSlide>
            <SwiperSlide className="slide-item"> <a href="#"><img src="images/resource/client.png" alt /></a> </SwiperSlide>
            <SwiperSlide className="slide-item"> <a href="#"><img src="images/resource/client.png" alt /></a> </SwiperSlide>
            <SwiperSlide className="slide-item"> <a href="#"><img src="images/resource/client.png" alt /></a> </SwiperSlide>
        </Swiper>
    )
}
