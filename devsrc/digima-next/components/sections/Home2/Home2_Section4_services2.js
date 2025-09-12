
export default function Home2_Section4() {
    const data = [
        // {
        //     title: <>{`Website `} <br />{`Development`}</>,
        //     icon: "icon flaticon-digital-services",
        // },
        {
            title: <>{`Graphic `} <br />{`Designing`}</>,
            icon: "icon flaticon-graphic-design"
        },
        {
            title: <>{`Digital `} <br />{`marketing`}</>,
            icon: "icon flaticon-technology"
        },
        {
            title: <>{`apps `} <br />{`Development`}</>,
            icon: "icon flaticon-mobile-app"
        },
        {
            title: <>{`Seo content `} <br />{`writing`}</>,
            icon: "icon flaticon-content-creator"
        },
        {
            title: <>{`UI / UX `} <br />{`Designing`}</>,
            icon: "icon flaticon-ux-design"
        },
    ];






    return (
        <>
            {/* Services Section Two*/}
            <section className="services-section-two pb-0">
                <div className="bg bg-pattern-1" />
                <div className="auto-container">
                    <div className="sec-title light">
                        <span className="sub-title">our services</span>
                        <h2>Services we offer</h2>
                    </div>
                    <div className="row">
                        {/* Service Block */}
        
                        <div className="service-block-two offset-xl-6 col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <h6 className="title"><a href="page-service-details">Website <br />Development</a></h6>
                                <i className="icon flaticon-digital-services" />
                            </div>
                        </div>

                        {data.map((item, i) => (
                            <div className="service-block-two col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <h6 className="title"><a href="page-service-details">{item.title}</a></h6>
                                    <i className={item.icon} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Call To Action */}
                <div className="call-to-action-two">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="bg" style={{ backgroundImage: 'url(./images/background/3.jpg)' }} />
                            <div className="title-box">
                                <h3 className="title">We’re Ready Develop Your Site!</h3>
                            </div>
                            <div className="btn-box">
                                <a href="page-contact" className="theme-btn btn-style-one"><span className="btn-title">get a qoute</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Call To Action */}
            </section>
            {/* End Services Section Two */}

        </>
    )
}
