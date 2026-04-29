import Link from 'next/link';
import React from 'react';
import AccordionFAQ from '../elements/AccordionFAQ';

const serviceList = [
    { title: "SEO Optimisation",            icon: "flaticon-marketing" },
    { title: "Social Media Marketing",      icon: "flaticon-social-media" },
    { title: "PPC & Paid Advertising",      icon: "flaticon-technology" },
    { title: "Content Marketing",           icon: "flaticon-content-creator" },
    { title: "Web Design & Development",    icon: "flaticon-webpage" },
    { title: "Email & Marketing Automation",icon: "flaticon-sharing" },
]

const highlights = [
    "Data-Driven Keyword Research",
    "Technical SEO Audit & Fixes",
    "Authority Link Building",
    "On-Page Content Optimisation",
    "Local SEO & Google My Business",
    "Monthly Performance Reporting",
]

const faqs = [
    {
        q: "What does your SEO service include?",
        a: "Our SEO service covers a full technical audit, on-page optimisation, keyword strategy, link building, Google My Business management, and monthly reporting — everything needed to grow your organic visibility sustainably."
    },
    {
        q: "How do you choose target keywords for my business?",
        a: "We combine search volume data, keyword difficulty scores, competitor gap analysis, and your business goals to build a keyword strategy focused on terms that actually drive qualified traffic and conversions."
    },
    {
        q: "Do you guarantee first-page Google rankings?",
        a: "No ethical SEO agency can guarantee specific rankings — Google's algorithm is dynamic. What we guarantee is a rigorous, white-hat strategy, transparent reporting, and a track record of moving clients to the first page for competitive keywords."
    },
    {
        q: "How is SEO different from running Google Ads?",
        a: "Google Ads deliver immediate visibility but stop the moment you pause your budget. SEO builds lasting authority and organic traffic over time. We recommend both for the best results — paid ads for short-term wins, SEO for long-term growth."
    },
]

const MAIN_IMAGE = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1300&h=650&auto=format&fit=crop&q=80"
const SIDEBAR_BG = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&auto=format&fit=crop&q=80"

const ServiceDetails = () => {
    return (
        <>
            <section className="services-details">
                <div className="container">
                    <div className="row">

                        {/* Sidebar */}
                        <div className="col-xl-4 col-lg-4">
                            <div className="service-sidebar">

                                {/* Service List */}
                                <div className="sidebar-widget service-sidebar-single">
                                    <div className="service-sidebar wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1200m">
                                        <div className="service-list">
                                            <ul>
                                                {serviceList.map((item, i) => (
                                                    <li key={i}>
                                                        <Link className={i === 0 ? 'current' : ''} href="/page-service-details">
                                                            <i className="fas fa-angle-right" />
                                                            <span>{item.title}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Sidebar CTA Banner */}
                                <div className="sidebar-widget banner-widget">
                                    <div className="widget-content" style={{ backgroundImage: `url(${SIDEBAR_BG})` }}>
                                        <div className="shape" style={{ backgroundImage: 'url(/images/resource/overlay-shape.png)' }} />
                                        <div className="content-box">
                                            <div className="icon-box">
                                                <i className="lnr lnr-icon-pie-chart" />
                                            </div>
                                            <h3>Ready to Grow Your Business Online?</h3>
                                            <Link href="/page-contact" className="theme-btn btn-sm btn-style-one light-bg">
                                                <span className="btn-title text-black">Get a Free Quote</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Download Brochure */}
                                <div className="sidebar-widget service-sidebar-single mt-5">
                                    <div className="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">
                                        <Link href="/page-contact" className="theme-btn btn-style-one d-grid">
                                            <span className="btn-title"><span className="fas fa-envelope" /> Request a Proposal</span>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="col-xl-8 col-lg-8">
                            <div className="services-details__content">

                                {/* Hero Image */}
                                <img
                                    src={MAIN_IMAGE}
                                    alt="SEO & Search Marketing"
                                    style={{ width: '100%', height: 'auto', borderRadius: '6px' }}
                                />

                                {/* Overview */}
                                <h2 className="mt-4">SEO &amp; Search Marketing</h2>
                                <p>
                                    Search Engine Optimisation is the foundation of every successful digital marketing strategy. At K3 Media, we build sustainable organic growth by combining deep technical expertise with creative content strategies tailored to your industry. Our approach goes beyond keyword rankings — we focus on attracting the right audience, at the right moment, with the right message.
                                </p>
                                <p>
                                    Whether you're a startup looking to establish your online presence or an established brand aiming to dominate competitive search terms, our SEO specialists craft data-backed roadmaps that deliver measurable, long-lasting results. Every campaign is built around your business goals — not vanity metrics.
                                </p>

                                {/* What We Deliver */}
                                <div className="content mt-40">
                                    <div className="text">
                                        <h3>What We Deliver</h3>
                                        <p>Our SEO engagements are comprehensive, transparent, and fully aligned with Google's guidelines. From the first audit to ongoing monthly optimisation, here's what you get with every K3 Media SEO retainer.</p>
                                    </div>
                                    <div className="feature-list">
                                        <div className="row clearfix">
                                            {highlights.map((feat, i) => (
                                                <div key={i} className="col-lg-6 col-md-6 col-sm-12 column">
                                                    <div className="single-item">
                                                        <div className="icon-box"><i className="fas fa-check-circle" /></div>
                                                        <h6 className="title">{feat}</h6>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ */}
                                <div className="mt-25">
                                    <h3>Frequently Asked Questions</h3>
                                    <p>Have questions about how SEO works and what to expect? Here are the answers our clients ask most often before getting started.</p>
                                    <AccordionFAQ items={faqs} />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceDetails
