import { useEffect, useState } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSliderOne = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    });
    const thumbs = {
        dots: false,
        arrows: false,
        speed: 300,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    const slider = {
        arrows: false,
        dots: false,
        infinite: false,
        autoplay: false,
        speed: 300,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <Slider
                {...slider}
                asNavFor={nav2}
                ref={(slider) => setSlider1(slider)}
                className="testimonial-content"
            >
                <div className="testimonial-block ">
                  <div className="inner-box">
                    <div className="image-box"><figure className="image"><img src="images/resource/testi-1.png" alt /></figure></div>
                    <div className="text">This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.</div>
                    <h4 className="name">Christine Eve</h4>
                  </div>
                </div>
                {/* Testimonial Block Two */}
                <div className="testimonial-block ">
                  <div className="inner-box">
                    <div className="image-box"><figure className="image"><img src="images/resource/testi-2.png" alt /></figure></div>
                    <div className="text">Excellent service competitive pricing and customer support. It’s throughly refresing to get such a personal touch. This is due to their excellent service, </div>
                    <h4 className="name">Christine Eve</h4>
                  </div>
                </div>
                {/* Testimonial Block Two */}
                <div className="testimonial-block ">
                  <div className="inner-box">
                    <div className="image-box"><figure className="image"><img src="images/resource/testi-3.png" alt /></figure></div>
                    <div className="text">pricing and customer support. It’s throughly refresing to get such This is due to their excellent service, competitive a personal touch.</div>
                    <h4 className="name">Christine Eve</h4>
                  </div>
                </div>
            </Slider>
            <Slider
                {...thumbs}
                asNavFor={nav1}
                ref={(slider) => setSlider2(slider)}
                className="product-thumb-slider testimonial-thumbs">
                <div className=" testimonial-thumb">
                    <figure className="image"><img src="images/resource/testi-thumb-1.png" alt /></figure>
                </div>
                <div className=" testimonial-thumb">
                    <figure className="image"><img src="images/resource/testi-thumb-2.png" alt /></figure>
                </div>
                <div className=" testimonial-thumb">
                    <figure className="image"><img src="images/resource/testi-thumb-3.png" alt /></figure>
                </div>
            </Slider>
        </>
    );
};
export default TestimonialSliderOne;