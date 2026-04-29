import React from 'react'

const steps = [
    {
        num: "01",
        icon: "icon flaticon-research-and-development",
        title: "Discover & Audit",
        text: "We start by deeply understanding your business, competitors, and target audience — then audit your current digital presence to identify gaps and quick wins."
    },
    {
        num: "02",
        icon: "icon flaticon-design-thinking",
        title: "Strategise & Plan",
        text: "Using our findings, we build a custom, multi-channel digital marketing roadmap with clear KPIs, timelines, and budget allocations tailored to your goals."
    },
    {
        num: "03",
        icon: "icon flaticon-rocket",
        title: "Execute & Launch",
        text: "Our specialists bring the strategy to life — launching campaigns, publishing content, and activating channels with precision and creative excellence."
    },
    {
        num: "04",
        icon: "icon flaticon-customer-satisfaction",
        title: "Optimise & Scale",
        text: "We continuously analyse performance data, test new approaches, and refine campaigns to drive better results — then scale what works to accelerate your growth."
    }
]

export default function ServicesProcess() {
    return (
        <>
            {/* Process Section */}
            <section style={{ padding: '80px 0 60px', background: '#f5f7fa' }}>
                <div className="auto-container">
                    <div className="sec-title text-center" style={{ marginBottom: '50px' }}>
                        <span className="sub-title">Our Approach</span>
                        <h2>How We Deliver Results</h2>
                    </div>
                    <div className="row g-4">
                        {steps.map((step, i) => (
                            <div key={i} className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay={`${i * 150}ms`}>
                                <div style={{
                                    background: '#ffffff',
                                    borderRadius: '8px',
                                    padding: '40px 28px 32px',
                                    boxShadow: '0 6px 30px rgba(0,0,0,0.08)',
                                    borderTop: '4px solid #e9a233',
                                    height: '100%',
                                    textAlign: 'center'
                                }}>
                                    <div style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '64px',
                                        height: '64px',
                                        borderRadius: '50%',
                                        background: '#171717',
                                        marginBottom: '20px'
                                    }}>
                                        <i className={step.icon} style={{ fontSize: '28px', color: '#e9a233' }} />
                                    </div>
                                    <div style={{
                                        fontSize: '12px',
                                        fontWeight: '700',
                                        color: '#e9a233',
                                        letterSpacing: '2px',
                                        marginBottom: '10px'
                                    }}>STEP {step.num}</div>
                                    <h5 style={{ color: '#171717', fontWeight: '700', marginBottom: '14px' }}>{step.title}</h5>
                                    <p style={{ color: '#555', lineHeight: '1.8', margin: 0, fontSize: '14px' }}>{step.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* End Process Section */}
        </>
    )
}
