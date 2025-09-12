import React from 'react'

export default function Home1_Section3() {
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
                                        <span className="sub-title">get to know us</span>
                                        <h2>Leading the best digital <br />agency in town</h2>
                                        <h4>The professional approach to development.</h4>
                                        <div className="text">There are many variations of simply free text passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't slightly.</div>
                                    </div>
                                    {/*Skills*/}
                                    <div className="skills">
                                        {/*Skill Item*/}
                                        <div className="skill-item">
                                            <div className="skill-header">
                                                <h6 className="skill-title">Website Designing</h6>
                                            </div>
                                            <div className="skill-bar">
                                                <div className="bar-inner">
                                                    <div className="bar progress-line" style={{"width":"77%"}}data-width={77}>
                                                        <div className="skill-percentage">
                                                            <div className="count-box"><span className="count-text" data-speed={3000} data-stop={77}>77</span>%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="list-style-one">
                                        <li><i className="fa fa-check-circle" /> Maecenas id amet libero rutrum</li>
                                        <li><i className="fa fa-check-circle" /> Nolam vel suffered sit form</li>
                                        <li><i className="fa fa-check-circle" /> Proin mattis noted purus</li>
                                    </ul>
                                    <div className="bottom-box">
                                        <a href="page-about" className="theme-btn btn-style-one hvr-dark"><span className="btn-title">Discover More</span></a>
                                        {/* Founder Info */}
                                        <div className="exp-box">
                                            <h2 className="count"><i className="icon flaticon-experience" /> +30</h2>
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
                                        <figure className="image-1 overlay-anim wow fadeInUp"><img src="images/resource/about-1.jpg" alt /></figure>
                                        <figure className="image-2 overlay-anim wow fadeInRight"><img src="images/resource/about-2.jpg" alt /></figure>
                                        <span className="icon-box icon-one"><i className="flaticon-innovation" /></span>
                                        <span className="icon-box icon-two"><i className="flaticon-rocket" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Emd About Section */}

        </>
    )
}
