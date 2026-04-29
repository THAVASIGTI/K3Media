import React from 'react'

export default function AboutFeatures() {
    const data = [
        {
            title: <>Data-Driven<br />Strategy</>,
            icon: "icon flaticon-team",
            link: "page-service-details"
        },
        {
            title: <>Creative Content<br />Production</>,
            icon: "icon flaticon-design-thinking",
            link: "page-service-details"
        },
        {
            title: <>Measurable<br />ROI Results</>,
            icon: "icon flaticon-customer-satisfaction",
            link: "page-service-details"
        }
    ]

    return (
        <>
            {/* Features Section */}
            <section className="features-section-two">
                <div className="auto-container">
                    <div className="row">
                        {data.map((item, i) => (
                            <div key={i} className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="content">
                                        <h6 className="title"><a href={item.link}>{item.title}</a></h6>
                                        <i className={item.icon} />
                                    </div>
                                    <a href={item.link} className="read-more">Read More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bottom-box">
                        Full-funnel digital marketing built to grow your revenue.{" "}
                        <a href="page-services" className="theme-btn btn-style-one light-bg small">Explore All Services</a>
                    </div>
                </div>
            </section>
            {/* End Features Section */}
        </>
    )
}
