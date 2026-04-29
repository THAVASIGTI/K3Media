import React from 'react'

export default function AboutIntro() {
    return (
        <>
            {/* About Section */}
            <section className="about-section">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="row">
                            <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <span className="sub-title">Who We Are</span>
                                        <h2>We Power Brands With <br />Purposeful Digital Marketing</h2>
                                        <h4>From strategy to execution — we make your brand impossible to ignore.</h4>
                                        <div className="text">
                                            K3 Media is a full-service digital marketing agency dedicated to helping businesses grow online.
                                            We combine data-driven insights with creative storytelling to deliver campaigns that convert
                                            visitors into loyal customers across every digital channel.
                                        </div>
                                    </div>

                                    {/* Skills */}
                                    <div className="skills">
                                        <div className="skill-item">
                                            <div className="skill-header">
                                                <h6 className="skill-title">SEO &amp; Search Marketing</h6>
                                            </div>
                                            <div className="skill-bar">
                                                <div className="bar-inner">
                                                    <div className="bar progress-line" style={{ width: "90%" }} data-width={90}>
                                                        <div className="skill-percentage">
                                                            <div className="count-box"><span className="count-text" data-speed={3000} data-stop={90}>90</span>%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skill-item">
                                            <div className="skill-header">
                                                <h6 className="skill-title">Social Media Marketing</h6>
                                            </div>
                                            <div className="skill-bar">
                                                <div className="bar-inner">
                                                    <div className="bar progress-line" style={{ width: "85%" }} data-width={85}>
                                                        <div className="skill-percentage">
                                                            <div className="count-box"><span className="count-text" data-speed={3000} data-stop={85}>85</span>%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skill-item">
                                            <div className="skill-header">
                                                <h6 className="skill-title">PPC &amp; Paid Advertising</h6>
                                            </div>
                                            <div className="skill-bar">
                                                <div className="bar-inner">
                                                    <div className="bar progress-line" style={{ width: "80%" }} data-width={80}>
                                                        <div className="skill-percentage">
                                                            <div className="count-box"><span className="count-text" data-speed={3000} data-stop={80}>80</span>%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="list-style-one">
                                        <li><i className="fa fa-check-circle" /> Certified Google &amp; Meta Advertising Partners</li>
                                        <li><i className="fa fa-check-circle" /> Transparent Reporting &amp; Real-Time Analytics</li>
                                        <li><i className="fa fa-check-circle" /> 200+ Brands Scaled Across 15+ Industries</li>
                                    </ul>

                                    <div className="bottom-box" style={{ alignItems: 'center', gap: '30px' }}>
                                        <a href="page-services" className="theme-btn btn-style-one hvr-dark"><span className="btn-title">Our Services</span></a>
                                        <div className="exp-box" style={{ position: 'relative', right: 'auto', bottom: 'auto', minWidth: 'unset', marginLeft: '0' }}>
                                            <h2 className="count"><i className="icon flaticon-experience" /> +10</h2>
                                            <span className="txt">Years of Experience</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image Column */}
                            <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                                <div className="inner-column wow fadeInLeft">
                                    <div className="image-box">
                                        <span className="icon icon-dots-one bounce-x" />
                                        {/* image-1 size: 400x446 — float-up animation */}
                                        <figure className="image-1 overlay-anim wow fadeInUp" style={{ animation: 'aboutFloatUp 4s ease-in-out infinite' }}>
                                            <img
                                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=446&auto=format&fit=crop&crop=center&q=80"
                                                alt="Digital Marketing Team"
                                                width={400}
                                                height={446}
                                            />
                                        </figure>
                                        {/* image-2 size: 400x343 — float-down animation (offset phase) */}
                                        <figure className="image-2 overlay-anim wow fadeInRight" style={{ animation: 'aboutFloatDown 4s ease-in-out infinite' }}>
                                            <img
                                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=343&auto=format&fit=crop&crop=center&q=80"
                                                alt="Digital Marketing Strategy"
                                                width={400}
                                                height={343}
                                            />
                                        </figure>
                                        <span className="icon-box icon-one"><i className="flaticon-innovation" /></span>
                                        <span className="icon-box icon-two"><i className="flaticon-rocket" /></span>
                                    </div>
                                </div>
                            </div>

                            <style>{`
                                @keyframes aboutFloatUp {
                                    0%, 100% { transform: translateY(0px); }
                                    50%       { transform: translateY(-12px); }
                                }
                                @keyframes aboutFloatDown {
                                    0%, 100% { transform: translateY(0px); }
                                    50%       { transform: translateY(12px); }
                                }
                            `}</style>
                        </div>
                    </div>
                </div>
            </section>
            {/* End About Section */}
        </>
    )
}
