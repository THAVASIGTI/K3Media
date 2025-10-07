import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const BannerSliderTwo = () => {

    const data = [
        {
            img: 'url(images/main-slider/2.jpg)',
            title1: "Experience the",
            title2: "best digital agency",
            desc: "You have better things to do than worry about your business",
            link1: "/page-about",
            link1Text: "Get Started",
            link2: "/page-about",
            link2Text: "Expore Now"
        },
        {
            img: "project-1.jpg",
            title1: "Experience the",
            title2: "best digital agency"
        }
    ];


    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 222500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                // breakpoints={{
                //     320: {
                //         slidesPerView: 1,
                //         spaceBetween: 30,
                //     },
                //     575: {
                //         slidesPerView: 1,
                //         spaceBetween: 30,
                //     },
                //     767: {
                //         slidesPerView: 1,
                //         spaceBetween: 30,
                //     },
                //     991: {
                //         slidesPerView: 2,
                //         spaceBetween: 30,
                //     },
                //     1199: {
                //         slidesPerView: 4,
                //         spaceBetween: 30,
                //     },
                //     1350: {
                //         slidesPerView: 4,
                //         spaceBetween: 30,
                //     },
                // }}
                className="project-carousel-two"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="project-block">
                        <div className="slide-item">
                            <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/2.jpg)' }}>
                                <div className="auto-container">
                                    <div className="content-box">
                                        <h1 className="title wow fadeInup" data-wow-delay="0.3s">Experience the <br />best digital agency</h1>
                                        <div className="text wow fadeInup" data-wow-delay="0.5s">You have better things to do than worry about your business</div>
                                        <div className="btn-box wow fadeInup" data-wow-delay="0.9s">
                                            <a href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Get Started</span></a>
                                            <a href="page-about" className="theme-btn btn-style-one light-bg"><span className="btn-title">Explore Now</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>



        </>
    );
};

export default BannerSliderTwo;