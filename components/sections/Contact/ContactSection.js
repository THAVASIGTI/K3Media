import React from 'react'

export default function ContactSection() {
    return (
        <>
            {/* Contact Section */}
            <section className="contact-section">
                <div className="bg bg-pattern-6" />
                <div className="auto-container">
                    <div className="row">
                        {/* Title Column — full width since form is removed */}
                        <div className="title-column col-lg-6 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Get In Touch</span>
                                    <h2>Let's Work Together</h2>
                                    <div className="text">
                                        Have a project in mind or want to know how K3 Media can grow your business online?
                                        Reach out — our team will get back to you within one business day.
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="contact-info-block">
                                    <div className="inner">
                                        <i className="icon fa fa-phone" />
                                        <h6 className="title">Call Us Anytime</h6>
                                        <div className="text">
                                            <a href="tel:+919047355000">+91 90473 55000</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="contact-info-block">
                                    <div className="inner">
                                        <i className="icon fa fa-envelope" />
                                        <h6 className="title">Send Us an Email</h6>
                                        <div className="text">
                                            <a href="mailto:prem@k3media.in">prem@k3media.in</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="contact-info-block">
                                    <div className="inner">
                                        <i className="icon fa fa-map-marker-alt" />
                                        <h6 className="title">Visit Our Office</h6>
                                        <div className="text">
                                            120, 1st Floor, Bahathsingh Street,<br />
                                            Ramamoorthy Nagar, Vilangudi,<br />
                                            Madurai – 625 018, Tamil Nadu
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Contact Section */}
        </>
    )
}
