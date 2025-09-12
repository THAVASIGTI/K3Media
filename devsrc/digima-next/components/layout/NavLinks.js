import Link from 'next/link';
import React from 'react';

const NavLinks = ({ extraClassName }) => {
    return (
        <ul className={`navigation ${extraClassName}`}>
            <li className="current dropdown"><Link href="/">Home</Link>
                <ul>
                    <li><Link href="/">Home page 01</Link></li>
                    <li><Link href="/index-2">Home page 02</Link></li>
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
    );
};

export default NavLinks;