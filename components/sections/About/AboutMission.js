import React from 'react'

export default function AboutMission() {
    const values = [
        {
            icon: "flaticon-innovation",
            title: "Our Mission",
            text: "To empower businesses of every size with digital marketing strategies that drive real, sustainable growth — not vanity metrics."
        },
        {
            icon: "flaticon-rocket",
            title: "Our Vision",
            text: "A world where every brand can compete and win online through smart, ethical, and creative digital marketing."
        },
        {
            icon: "flaticon-customer-satisfaction",
            title: "Our Values",
            text: "Transparency, accountability, and relentless curiosity. We treat your budget like it's our own and every campaign like it's our reputation on the line."
        }
    ]

    return (
        <>
            {/* Mission Section */}
            <section className="services-section-two" style={{ paddingTop: '80px', paddingBottom: '60px', background: '#f5f7fa' }}>
                <div className="auto-container">
                    <div className="sec-title text-center" style={{ marginBottom: '50px' }}>
                        <span className="sub-title">What Drives Us</span>
                        <h2>Mission, Vision &amp; Values</h2>
                    </div>
                    <div className="row g-4">
                        {values.map((item, i) => (
                            <div key={i} className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                <div style={{
                                    padding: '40px 30px',
                                    background: '#ffffff',
                                    borderRadius: '8px',
                                    boxShadow: '0 6px 30px rgba(0,0,0,0.09)',
                                    borderTop: '4px solid #e9a233',
                                    textAlign: 'center'
                                }}>
                                    <div style={{ marginBottom: '20px' }}>
                                        <i className={`icon ${item.icon}`} style={{ fontSize: '48px', color: '#e9a233' }} />
                                    </div>
                                    <h4 style={{ marginBottom: '12px', color: '#171717', fontWeight: '700' }}>{item.title}</h4>
                                    <p style={{ color: '#555555', lineHeight: '1.9', margin: 0 }}>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* End Mission Section */}
        </>
    )
}
