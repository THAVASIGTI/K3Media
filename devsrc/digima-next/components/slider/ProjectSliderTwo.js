import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const ProjectSliderTwo = () => {

    const data = [
        {
            img: "project-5.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-6.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-7.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-8.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-6.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-5.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-8.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-7.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        }
    ];


    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 90000,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                className="project-carousel-two"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="project-block-two">
                        <div class="inner-box">
                            <div class="image-box">
                                <figure class="image"><Link href="page-project-details"><img src={`images/resource/${item.img}`} alt /></Link>
                                </figure>
                                <Link href="page-project-details" class="read-more"><i class="fa fa-long-arrow-alt-right"></i></Link>
                                <div class="info-box">
                                    <h4 class="title"><Link href="page-project-details">{item.title}</Link></h4>
                                </div>
                            </div>
                            <div class="overlay-content">
                                <div class="info-box">
                                    <h4 class="title"><Link href="page-project-details">{item.title}</Link></h4>
                                    <div class="text">{item.desc}</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>



        </>
    );
};

export default ProjectSliderTwo;