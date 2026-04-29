import React from 'react'

export default function ServicesCTA() {
    return (
        <>
            {/* CTA Section */}
            <section style={{
                padding: '80px 0',
                background: '#171717',
                backgroundImage: 'url(images/icons/bg-pattern.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <div className="auto-container">
                    <div style={{ textAlign: 'center' }}>
                        <span style={{
                            display: 'block',
                            fontSize: '13px',
                            fontWeight: '700',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            color: '#e9a233',
                            marginBottom: '16px'
                        }}>Ready to Grow?</span>
                        <h2 style={{ color: '#ffffff', marginBottom: '16px', fontSize: '38px' }}>
                            Let's Build Your Digital Marketing Strategy
                        </h2>
                        <p style={{
                            color: '#aaaaaa',
                            fontSize: '16px',
                            lineHeight: '1.8',
                            maxWidth: '560px',
                            margin: '0 auto 36px'
                        }}>
                            Get a free consultation with our experts and discover exactly which channels and tactics will move the needle for your business.
                        </p>
                        <a href="page-contact" className="theme-btn btn-style-one">
                            <span className="btn-title">Get a Free Consultation</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* End CTA Section */}
        </>
    )
}
