import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const TestimonialSliderTwo = () => {

    const data = [
        {
            img: "testi-thumb-2.png",
            title: "Gokul",
            desig: "Rathnam Honda",
            text: "We partnered with this K3 Media for our social media campaigns and the results were fantastic. Their video creatives are fresh, engaging, and perfectly aligned with our brand. The ads they ran not only looked great but also brought in high-quality leads consistently"
        },
        {
            img: "testi-thumb-1.png",
            title: "Mythili T",
            desig: "Fair N Glow",
            text: "Outstanding video creatives and smart ad placement. We’ve received more leads in the past 3 months than we did in the previous year"
        },
        {
            img: "testi-thumb-3.png",
            title: "Shekar",
            desig: "Motley Wears",
            text: "Wonderful video ads created by K3 Media gives more leads compared to previews year. Thanks team!"
        },
        {
            img: "testi-thumb-1.png",
            title: "Prasath",
            desig: "Genpix",
            text: "Simple and Decent creative with proper Ad planning gives good reach on festival time."
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
                                    {/* <div className="thumb"><img src={`images/resource/${item.img}`} alt /></div> */}
                                    <div className="rating"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div>
                                    <div className="text">{item.text}</div>
                                </div>
                                <div className="info-box">
                                    <h6 className="name">{item.title}</h6>
                                    <span className="designation">{item.desig}</span>
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