import Link from 'next/link';
import React, { useEffect } from 'react';
import MobileMenu from './MobileMenu';

const Header1Boxed = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {
    useEffect(() => {
        document.querySelector("body").classList.add("tm-boxed-layout")
        document.querySelector("body").style.backgroundImage = `url("images/pattern/p13.png")`

    }, [])

    return (
        <>
            <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>

                {/* Main box */}
                <div className="main-box">
                    <div className="logo-box">
                        <div className="logo"><Link href="/"><img src="/images/logo.png" alt title="Tronis" /></Link></div>
                        <button className="ui-btn ui-btn search-btn" onClick={handleToggle} >
                            <span className="icon lnr lnr-icon-search" />
                        </button>
                    </div>

                    {/*Nav Box*/}
                    <div className="nav-outer">
                        <nav className="nav main-menu">
                            <ul className="navigation">
                                <li className="current dropdown"><Link href="/">Home</Link>
                                    <ul>
                                        <li><Link href="/">Home page 01</Link></li>
                                        <li><Link href="/index-2">Home page 01</Link></li>
                                        <li className="dropdown"><Link href="/">Single</Link>
                                            <ul>
                                                <li><Link href="/">Home Single 1</Link></li>
                                                <li><Link href="/index-2">Home Single 2</Link></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown"><Link href="#">dark</Link>
                                            <ul>
                                                <li><Link href="/index-1-dark">Home Dark 1</Link></li>
                                                <li><Link href="/index-2-dark">Home Dark 2</Link></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown"><Link href="#">Boxed</Link>
                                            <ul>
                                                <li><Link href="/index-1-boxed">Home Boxed 1</Link></li>
                                                <li><Link href="/index-2-boxed">Home Boxed 2</Link></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown"><Link href="#">RTL</Link>
                                            <ul>
                                                <li><Link href="/index-1-rtl">Home RTL 1</Link></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown"><Link href="#">Header Styles</Link>
                                            <ul>
                                                <li><Link href="/">Header Style One</Link></li>
                                                <li><Link href="/index-2">Header Style Two</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown"><Link href="/page-about">Pages</Link>
                                    <ul>
                                        <li><Link href="/page-about">About</Link></li>
                                        <li class="dropdown"><Link href="/page-team">Team</Link>
                                            <ul>
                                                <li><Link href="/page-team">Team Grid</Link></li>
                                                <li><Link href="/page-team-details">Team Details</Link></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown"><Link href="/shop-products">Shop</Link>
                                            <ul>
                                                <li><Link href="/shop-products">Products</Link></li>
                                                <li><Link href="/shop-products-sidebar">Products with Sidebar</Link></li>
                                                <li><Link href="/shop-product-details">Product Details</Link></li>
                                                <li><Link href="/shop-cart">Cart</Link></li>
                                                <li><Link href="/shop-checkout">Checkout</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/page-testimonial">Testimonial</Link></li>
                                        <li><Link href="/page-pricing">Pricing</Link></li>
                                        <li><Link href="/page-faq">FAQ</Link></li>
                                        <li><Link href="/page-404">Page 404</Link></li>
                                    </ul>
                                </li>
                                <li class="dropdown"><Link href="/page-services">Services</Link>
                                    <ul>
                                        <li><Link href="/page-services">Services Grid</Link></li>
                                        <li><Link href="/page-service-details">Service Details</Link></li>
                                    </ul>
                                </li>
                                <li class="dropdown"><Link href="/page-projects">Portfolio</Link>
                                    <ul>
                                        <li><Link href="/page-projects">Portfolio Grid</Link></li>
                                        <li><Link href="/page-project-details">Portfolio Details</Link></li>
                                    </ul>
                                </li>
                                <li class="dropdown"><Link href="/news-grid">News</Link>
                                    <ul>
                                        <li><Link href="/news-grid">News Grid</Link></li>
                                        <li><Link href="/news-details">News Details</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="/page-contact">Contact</Link></li>
                            </ul>
                        </nav>
                        {/* Main Menu End*/}
                    </div>
                    <div className="outer-box">

                        {/* Mobile Nav toggler */}
                        <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars" /></div>
                    </div>
                </div>




                <div className="mobile-menu">
                    <div className="menu-backdrop" onClick={handleRemove} />
                    {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo"><Link href="/"><img src="/images/logo.png" alt title /></Link></div>
                            <div className="close-btn" onClick={handleRemove}><i className="icon fa fa-times" /></div>
                        </div>
                        <MobileMenu />
                        <ul className="contact-list-one">
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <i className="icon lnr-icon-phone-handset" />
                                    <span className="title">Call Now</span>
                                    <Link href="/tel:+92880098670">+92 (8800) - 98670</Link>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-envelope1" />
                                    <span className="title">Send Email</span>
                                    <Link href="/mailto:help@company.com">help@company.com</Link>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-clock" />
                                    <span className="title">Send Email</span>
                                    Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                                </div>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
                            <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
                            <li><Link href="/#"><i className="fab fa-pinterest" /></Link></li>
                            <li><Link href="/#"><i className="fab fa-instagram" /></Link></li>
                        </ul>
                    </nav>
                </div>

                <div className="search-popup">
                    <span className="search-back-drop" />
                    <button className="close-search" onClick={handleToggle}><span className="fa fa-times" /></button>
                    <div className="search-inner">
                        <form method="post" action="index">
                            <div className="form-group">
                                <input type="search" name="search-field" placeholder="Search..." required />
                                <button type="submit"><i className="fa fa-search" /></button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="inner-container">
                            {/*Logo*/}
                            <div className="logo">
                                <Link href="/" title><img src="/images/logo-2.png" alt title /></Link>
                            </div>
                            {/*Right Col*/}
                            <div className="nav-outer">
                                {/* Main Menu */}
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                        <MobileMenu />
                                    </div>
                                </nav>{/* Main Menu End*/}
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars" /></div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </>
    );
};

export default Header1Boxed;