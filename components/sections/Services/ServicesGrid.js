import React from 'react'

const services = [
    {
        count: "01",
        title: <>Search Engine<br />Optimisation</>,
        icon: "icon flaticon-marketing",
        text: "Rank higher on Google with data-backed keyword strategies, technical audits, and authority-building link campaigns that drive sustainable organic traffic.",
        delay: ""
    },
    {
        count: "02",
        title: <>Social Media<br />Marketing</>,
        icon: "icon flaticon-social-media",
        text: "Grow your brand across Instagram, LinkedIn, Facebook, and TikTok with scroll-stopping creatives and precision-targeted paid social campaigns.",
        delay: "300ms"
    },
    {
        count: "03",
        title: <>PPC &amp; Paid<br />Advertising</>,
        icon: "icon flaticon-technology",
        text: "Maximise ROI on every ad dollar with expertly managed Google Ads, Meta Ads, and programmatic campaigns built for conversions, not just clicks.",
        delay: "600ms"
    },
    {
        count: "04",
        title: <>Content<br />Marketing</>,
        icon: "icon flaticon-content-creator",
        text: "From blog articles to video scripts, we craft compelling content that educates your audience, builds trust, and guides prospects down the funnel.",
        delay: "900ms"
    },
    {
        count: "05",
        title: <>Web Design &amp;<br />Development</>,
        icon: "icon flaticon-webpage",
        text: "Conversion-optimised websites designed for speed, accessibility, and user experience — built to turn first-time visitors into paying customers.",
        delay: "300ms"
    },
    {
        count: "06",
        title: <>Email &amp;<br />Marketing Automation</>,
        icon: "icon flaticon-sharing",
        text: "Nurture leads and retain customers with personalised email sequences, automated drip campaigns, and A/B-tested newsletters that deliver results.",
        delay: "600ms"
    }
]

export default function ServicesGrid() {
    return (
        <>
            {/* Services Grid Section */}
            <section className="services-section">
                <div className="auto-container">
                    <div className="sec-title text-center" style={{ marginBottom: '50px' }}>
                        <span className="sub-title">What We Do</span>
                        <h2>Services Built to Grow Your Business</h2>
                    </div>
                    <div className="row">
                        {services.map((item, i) => (
                            <div
                                key={i}
                                className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                                data-wow-delay={item.delay || undefined}
                            >
                                <div className="inner-box">
                                    <span className="count">{item.count}</span>
                                    <i className={item.icon} />
                                    <h6 className="title"><a href="page-service-details">{item.title}</a></h6>
                                    <div className="text">{item.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* End Services Grid Section */}
        </>
    )
}
