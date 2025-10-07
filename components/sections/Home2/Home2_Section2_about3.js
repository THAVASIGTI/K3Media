
export default function Home2_Section2() {
    return (
        <>
            {/* About Section Three*/}
            <section className="about-section-three pt-0">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="row">
                            <div className="content-column col-lg-8 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <span className="sub-title">About company</span>
                                        <h2>Are you ready to <br />Brand your Business</h2>
                                    </div>
                                    <div className="content-box">
                                        <figure className="image"><img src="images/resource/about-5.png" alt /></figure>
                                        <div className="text">K3 Media is a fastest-growing creative and digital  marketing agency in Madurai providing services like Online Branding, Creative, Video Ads, Web Development, Search Engine Optimization (SEO) and Outdoor Advertising.</div>
                                        <ul className="list-style-one two-column">
                                            <li><i className="fa fa-check-circle" /> Brand it here!</li>
                                            {/* <li><i className="fa fa-check-circle" /> Nolam vel suffered sit</li> */}
                                        </ul>
                                        <div className="author-info">
                                            <figure className="thumb"><img src="images/resource/author-thumb2.png"  alt /></figure>
                                            <h6 className="name">Premkumar Kathirvel</h6>
                                            <div className="designation">Founder, K3 Media</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Features Column */}
                            <div className="features-column col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-column wow fadeInLeft">
                                    <ul className="features-list">
                                        <li>
                                            <i className="icon flaticon-team-1" />
                                            <h4 className="title">Brand Your Business</h4>
                                        </li>
                                        <li>
                                            <i className="icon flaticon-customer-support" />
                                            <h4 className="title">High Quality Ads</h4></li>
                                        <li>
                                            <i className="icon flaticon-rocket" />
                                            <h4 className="title">Digital Marketing <br/>Solutions</h4>
                                        </li>
                                    </ul>
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
