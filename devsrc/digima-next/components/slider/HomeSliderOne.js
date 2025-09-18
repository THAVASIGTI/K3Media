import React from 'react'
import Link from 'next/link'
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import 'swiper/css/effect-fade';

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade]);

export default function SliderArea() {
    return (
        <section className="main-slider">
            <div className="fullwidthbanner-container" >
                <div className="fullwidthabanner">
                    <Swiper
                        // install Swiper modules
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        spaceBetween={2}
                        slidesPerView={1}
                        zoom
                        autoplay={{
                            "delay": 3000,
                            "disableOnInteraction": false
                        }}
                        navigation={{
                            prevEl: ".tp-leftarrow",
                            nextEl: ".tp-rightarrow",
                        }}
                        loop={true}
                        // effect={"fade"}
                        // fadeEffect={{
                        //     crossFade: true
                        // }}
                    //  pagination={{ clickable: true }}
                    // navigation={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    >
                        <ul>
                            <SwiperSlide>
                                <li data-animation="fadeInUp" data-delay="0.9s" style={{  
                                  backgroundImage: "url(" + "images/main-slider/home-page-4.png" + ")",
                                  backgroundPosition: 'center',
                                  backgroundSize: 'cover',
                                  backgroundRepeat: 'no-repeat'
                                }}>
                                    <div className='content-wrap' data-animation="fadeInUp" data-delay="1.5s" >
                                        <div className="tp-caption tp-heading" >
                                            <h1>digital agency <br />for your business</h1>
                                        </div>
                                        <div className="tp-caption">
                                            <div className="text">You have better things to do than worry about your business</div>
                                        </div>
                                        <div className="tp-caption">
                                            <div className="btn-box">
                                                <a href="page-contact" className="theme-btn btn-style-one"><span className="btn-title">get a qoute</span></a>
                                                <a href="page-about" className="theme-btn btn-style-one light-bg"><span className="btn-title">Explore Now</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li data-animation="fadeInUp" data-delay="0.9s" style={{  
                                  backgroundImage: "url(" + "images/main-slider/1.jpg" + ")",
                                  backgroundPosition: 'center',
                                  backgroundSize: 'cover',
                                  backgroundRepeat: 'no-repeat'
                                }}>
                                    <div className='content-wrap' data-animation="fadeInUp" data-delay="1.5s" >
                                        <div className="tp-caption tp-heading" >
                                            <h1>digital agency <br />for your business</h1>
                                        </div>
                                        <div className="tp-caption">
                                            <div className="text">You have better things to do than worry about your business</div>
                                        </div>
                                        <div className="tp-caption">
                                            <div className="btn-box">
                                                <a href="page-contact" className="theme-btn btn-style-one"><span className="btn-title">get a qoute</span></a>
                                                <a href="page-about" className="theme-btn btn-style-one light-bg"><span className="btn-title">Explore Now</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li data-animation="fadeInUp" data-delay="0.9s" style={{  
                                  backgroundImage: "url(" + "images/main-slider/1.jpg" + ")",
                                  backgroundPosition: 'center',
                                  backgroundSize: 'cover',
                                  backgroundRepeat: 'no-repeat'
                                }}>
                                    <div className='content-wrap' data-animation="fadeInUp" data-delay="1.5s" >
                                        <div className="tp-caption tp-heading" >
                                            <h1>digital agency <br />for your business</h1>
                                        </div>
                                        <div className="tp-caption">
                                            <div className="text">You have better things to do than worry about your business</div>
                                        </div>
                                        <div className="tp-caption">
                                            <div className="btn-box">
                                                <a href="page-contact" className="theme-btn btn-style-one"><span className="btn-title">get a qoute</span></a>
                                                <a href="page-about" className="theme-btn btn-style-one light-bg"><span className="btn-title">Explore Now</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </SwiperSlide>
                        </ul>
                        {/* <div className="tp-leftarrow tparrows gyges" style={{ top: '50%', transform: 'matrix(1, 0, 0, 1, 0, -20)', left: 0, visibility: 'inherit', opacity: 1 }} />
                        <div className="tp-rightarrow tparrows gyges" style={{ top: '50%', transform: 'matrix(1, 0, 0, 1, -40, -20)', left: '100%', visibility: 'hidden', opacity: 0 }} /> */}


                    </Swiper>

                </div>
            </div>
            <ul className="social-links">
                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                <li><a href="#"><i className="fab fa-facebook" /></a></li>
                <li><a href="#"><i className="fab fa-pinterest" /></a></li>
                <li><a href="#"><i className="fab fa-instagram" /></a></li>
            </ul>
        </section>
        //   <!--slider area end-->  
    )
}