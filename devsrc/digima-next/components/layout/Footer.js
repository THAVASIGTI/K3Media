import React from 'react';

const Footer = () => {
    return (
        <>
            {/* Main Footer */}
            <footer className="main-footer">
                {/* Upper Box */}
                <div className="auto-container">
                    <div className="upper-box">
                        <div className="row">
                            {/*  */}
                            <div className="contact-info logo-box col-lg-4 col-md-12 wow fadeInUp text-center">
                                <div className="logo"><a href="#"><img src="images/logo.png" alt /></a></div>
                            </div>
                            {/* Contact Info */}
                            <div className="contact-info col-lg-4 col-md-12 wow fadeInRight">
                                <div className="inner-box">
                                    <h4 className="title">Send Email</h4>
                                    <div className="text"><a href="mailto:prem@k3media.in">prem@k3media.in</a></div>
                                </div>
                            </div>
                            {/* Contact Info */}
                            <div className="contact-info col-lg-4 col-md-12 wow fadeInLeft" data-wow-delay="600ms">
                                <div className="inner-box">
                                    <h4 className="title">call now</h4>
                                    <div className="text"><a href="tel:+91 9047355000">+91 9047355000</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Upper Box */}
                {/*Widgets Section*/}
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-7 col-lg-12 col-md-12 col-sm-12">
                                <div className="row">
                                    <div className="col-xl-8 col-lg-7 col-md-7">
                                        <div className="footer-widget about-widget">
                                            <h6 className="widget-title">About</h6>
                                            <div className="text">K3 Media is a leading Indian digital solutions company known for successfully completing large-scale campaigns. With expertise in marketing, branding, and media production, the company delivers creative, impactful strategies that drive business growth and client success.</div>
                                        </div>
                                    </div>
                                    {/* <div className="col-xl-5 col-lg-6 col-md-6">
                                        <div className="footer-widget">
                                            <h6 className="widget-title">Explore</h6>
                                            <ul className="user-links">
                                                <li><a href="#">Meet Our Team</a></li>
                                                <li><a href="#">What We Do</a></li>
                                                <li><a href="#">Latest News</a></li>
                                                <li><a href="#">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget contacts-widget">
                                    <h6 className="widget-title">Contact</h6>
                                    <div className="text">120, 1st floor, Bahathsingh Street, Ramamoorthy Nagar, Vilangudi, Madurai - 625 018</div>
                                    <ul className="social-icon-two">
                                        <li><a href="#"><i className="fab fa-facebook" /></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fab fa-pinterest" /></a></li>
                                        <li><a href="#"><i className="fab fa-instagram" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            {/* <div className="footer-column col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <h6 className="widget-title">Newsletter</h6>
                                    <div className="widget-content">
                                        <div className="subscribe-form">
                                            <div className="text">Subsrcibe for our upcoming latest articles and news resources</div>
                                            <form method="post" action="#">
                                                <div className="form-group">
                                                    <input type="email" name="email" className="email" defaultValue placeholder="Email Address" required />
                                                    <button type="button" className="theme-btn"><span className="btn-title"><i className="fa fa-paper-plane" /></span></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/*Footer Bottom*/}
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="copyright-text">
                                <p>© Copyright 2023 by  <a href="index.html">Company.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/*End Main Footer */}


        </>
    );
};

export default Footer;