import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const TestimonialSliderTwo = () => {

    const data = [
        {
            img: "testi-thumb-2.png",
            title: "Jame sickres",
            desig: "Founder"
        },
        {
            img: "testi-thumb-1.png",
            title: "Aleesha brown",
            desig: "Co Founder"
        },
        {
            img: "testi-thumb-3.png",
            title: "Mike Hardon",
            desig: "Market Manager"
        },
        {
            img: "testi-thumb-1.png",
            title: "Aleesha brown",
            desig: "Co Founder"
        }
    ];


    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 1,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    1199: {
                        slidesPerView: 2,
                    },
                    1350: {
                        slidesPerView: 2,
                    },
                }}
                className="testimonial-carousel-two"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="testimonial-block-two">
                        <div className="testimonial-block-two">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="thumb"><img src={`images/resource/${item.img}`} alt /></div>
                                    <div className="rating"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div>
                                    <div className="text">Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.</div>
                                </div>
                                <div className="info-box">
                                    <h6 className="name">Sarah Albert</h6>
                                    <span className="designation">Designer</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default TestimonialSliderTwo;