import Link from 'next/link';
import React from 'react';

const plans = [
    {
        icon: "flaticon-rocket",
        name: "Starter",
        price: "15,000",
        tag: null,
        style: "",
        features: [
            "SEO Audit & On-page Optimisation",
            "2 Social Media Platforms",
            "8 Posts per Month",
            "Google My Business Management",
            "Monthly Performance Report",
        ]
    },
    {
        icon: "flaticon-marketing",
        name: "Growth",
        price: "35,000",
        tag: "Most Popular",
        style: "style-two",
        features: [
            "Everything in Starter",
            "Google & Meta Ads Management",
            "4 Blog Articles per Month",
            "Email Campaign Setup",
            "Competitor Analysis",
            "Bi-weekly Strategy Calls",
        ]
    },
    {
        icon: "flaticon-wealth",
        name: "Enterprise",
        price: "75,000",
        tag: null,
        style: "",
        features: [
            "Everything in Growth",
            "Dedicated Account Manager",
            "Full-Funnel Custom Strategy",
            "2 Video Content per Month",
            "Advanced Analytics Dashboard",
            "Priority Support (24 hrs)",
        ]
    }
]

const Pricing = () => {
    return (
        <>
            <section className="pricing-section">
                <div className="auto-container">
                    <div className="sec-title text-center" style={{ marginBottom: '50px' }}>
                        <span className="sub-title">Transparent Pricing</span>
                        <h2>Plans That Grow With You</h2>
                    </div>
                    <div className="row justify-content-center">
                        {plans.map((plan, i) => (
                            <div key={i} className="pricing-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                <div className={`pricing-block ${plan.style}`}>
                                    <div className="inner-box">
                                        {plan.tag && (
                                            <span style={{
                                                position: 'absolute',
                                                top: '18px',
                                                right: '18px',
                                                background: '#e9a233',
                                                color: '#fff',
                                                fontSize: '11px',
                                                fontWeight: '700',
                                                letterSpacing: '1px',
                                                padding: '4px 12px',
                                                borderRadius: '20px',
                                                textTransform: 'uppercase'
                                            }}>{plan.tag}</span>
                                        )}
                                        <div className="image" style={{ marginBottom: '20px' }}>
                                            <i className={`icon ${plan.icon}`} style={{
                                                fontSize: '64px',
                                                color: '#e9a233',
                                                display: 'block'
                                            }} />
                                        </div>
                                        <div className="price-box">
                                            <h4 className="price">
                                                <sup style={{ fontSize: '60%', top: '-8px', position: 'relative' }}>₹</sup>
                                                {plan.price}
                                            </h4>
                                            <span className="validaty">/ Monthly</span>
                                        </div>
                                        <h4 className="title">{plan.name}</h4>
                                        <ul className="features">
                                            {plan.features.map((feat, j) => (
                                                <li key={j}>{feat}</li>
                                            ))}
                                        </ul>
                                        <div className="btn-box">
                                            <Link href="/page-contact" className="theme-btn btn-style-one hvr-light">
                                                <span className="btn-title">Get Started</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p style={{ textAlign: 'center', color: '#888', marginTop: '30px', fontSize: '14px' }}>
                        All prices are exclusive of GST (18%). Ad spend is billed separately. Custom plans available on request.
    </p>
                </div>
            </section>
        </>
    );
};

export default Pricing;
