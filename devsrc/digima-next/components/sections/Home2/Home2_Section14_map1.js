import React from 'react'

export default function Home2_Section14() {
  return (
    <>
      {/* Map Section*/}
      <section className="map-section">
        <div className="auto-container">
          <div className="outer-box">
            <div className="row g-0">
              {/* Contact Info Block */}
              <div className="contact-info-block-two col-lg-4 col-md-12 col-sm-12">
                <div className="inner">
                  <i className="icon fa fa-phone-volume" />
                  <h6 className="title">Have question?</h6>
                  <div className="text">Free <a href="tel:230009850">+23 (000)-9850</a></div>
                </div>
              </div>
              {/* Contact Info Block */}
              <div className="contact-info-block-two col-lg-4 col-md-12 col-sm-12">
                <div className="inner">
                  <i className="icon fa fa-envelope" />
                  <h6 className="title">Send email</h6>
                  <div className="text"><a href="mailto:needhelp@company.com">needhelp@company.com</a></div>
                </div>
              </div>
              {/* Contact Info Block */}
              <div className="contact-info-block-two col-lg-4 col-md-12 col-sm-12">
                <div className="inner">
                  <i className="icon fa fa-map-marker-alt" />
                  <h6 className="title">Visit anytime</h6>
                  <div className="text">30 broklyn golden street. USA</div>
                </div>
              </div>
            </div>
            <div className="social-link-outer">
              <div className="text">Follow us now</div>
              <ul className="social-icon-two">
                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                <li><a href="#"><i className="fab fa-facebook" /></a></li>
                <li><a href="#"><i className="fab fa-pinterest" /></a></li>
                <li><a href="#"><i className="fab fa-instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <iframe className="map" src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed" />
      </section>
      {/*End Map Section*/}

    </>
  )
}
