import React from 'react'
import SwiperCore, { Autoplay, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

SwiperCore.use([Autoplay, Navigation])

const reviews = [
    {
        name: "Priya Sharma",
        designation: "Marketing Director, TechNova",
        color: "#e9a233",
        rating: 5,
        text: "K3 Media completely transformed our SEO. Organic traffic jumped 240% in six months and we're now ranking on the first page for 15+ competitive keywords. Their team is meticulous and genuinely results-driven."
    },
    {
        name: "Rajesh Mehta",
        designation: "CEO, BuildRight Solutions",
        color: "#2c3e50",
        rating: 5,
        text: "The Google Ads campaigns K3 Media managed for us delivered a 4.2x return on ad spend in just the first month. Transparent reporting, zero fluff — just real, measurable results every week."
    },
    {
        name: "Ananya Krishnan",
        designation: "Founder, StyleHub",
        color: "#8e44ad",
        rating: 5,
        text: "Our Instagram following grew from 2,100 to 31,000 in 90 days with their social media strategy. The content calendar they built is outstanding. Our brand finally feels alive and consistent online."
    },
    {
        name: "Vikram Patel",
        designation: "Head of E-commerce, ShopEasy",
        color: "#16a085",
        rating: 5,
        text: "Sales from digital channels increased 180% after K3 Media overhauled our entire marketing funnel — from paid ads to email automation. Best investment our team has made in years."
    },
    {
        name: "Deepika Nair",
        designation: "Brand Manager, FreshBrew Co.",
        color: "#c0392b",
        rating: 5,
        text: "Their content marketing team produced articles that now rank on Google's first page. Lead quality improved significantly and our cost-per-lead dropped by 60%. Exceptional work throughout."
    },
    {
        name: "Arjun Gupta",
        designation: "Co-Founder, FinTrack",
        color: "#2980b9",
        rating: 5,
        text: "K3 Media rebuilt our website and set up automated email campaigns. Revenue from digital channels is up 3x year-on-year. They treat your business like their own — highly recommended."
    }
]

const InitialAvatar = ({ name, color }) => (
    <div style={{
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        background: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '22px',
        fontWeight: '700',
        color: '#ffffff',
        lineHeight: 1
    }}>
        {name.charAt(0)}
    </div>
)

export default function TestimonialsSection() {
    return (
        <>
            {/* Testimonials Section */}
            <section className="testimonial-section-two">
                <div className="bg bg-pattern-2" />
                <div className="auto-container">
                    <div className="sec-title text-center" style={{ marginBottom: '50px' }}>
                        <span className="sub-title">Client Stories</span>
                        <h2>What Our Clients Say</h2>
                    </div>
                    <div className="row">
                        <div className="testimonial-column col-xl-12 col-lg-12">
                            <div className="inner-column">
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    loop={true}
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    navigation={{
                                        prevEl: ".swiper-button-prev-style-3",
                                        nextEl: ".swiper-button-next-style-3",
                                    }}
                                    breakpoints={{
                                        320:  { slidesPerView: 1 },
                                        575:  { slidesPerView: 1 },
                                        767:  { slidesPerView: 2 },
                                        991:  { slidesPerView: 2 },
                                        1199: { slidesPerView: 3 },
                                        1350: { slidesPerView: 3 },
                                    }}
                                    className="testimonial-carousel-two"
                                >
                                    {reviews.map((item, i) => (
                                        <SwiperSlide key={i} className="testimonial-block-two">
                                            <div className="testimonial-block-two">
                                                <div className="inner-box">
                                                    <div className="content-box">
                                                        <div className="thumb">
                                                            <InitialAvatar name={item.name} color={item.color} />
                                                        </div>
                                                        <div className="rating">
                                                            {[...Array(item.rating)].map((_, j) => (
                                                                <i key={j} className="fa fa-star" />
                                                            ))}
                                                        </div>
                                                        <div className="text">{item.text}</div>
                                                    </div>
                                                    <div className="info-box">
                                                        <h6 className="name">{item.name}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Testimonials Section */}
        </>
    )
}
