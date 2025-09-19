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
                  <div className="text">Free <a href="tel:+919047355000">+91 9047355000</a></div>
                </div>
              </div>
              {/* Contact Info Block */}
              <div className="contact-info-block-two col-lg-4 col-md-12 col-sm-12">
                <div className="inner">
                  <i className="icon fa fa-envelope" />
                  <h6 className="title">Send email</h6>
                  <div className="text"><a href="mailto:prem@k3media.in">prem@k3media.in</a></div>
                </div>
              </div>
              {/* Contact Info Block */}
              <div className="contact-info-block-two col-lg-4 col-md-12 col-sm-12">
                <div className="inner">
                  <i className="icon fa fa-map-marker-alt" />
                  <h6 className="title">Visit anytime</h6>
                  <div className="text">120, 1st floor, Bahathsingh Street, Ramamoorthy Nagar, Vilangudi, Madurai - 625 018</div>
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
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.785750169057!2d78.09505657562353!3d9.951776090151261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf4dc6b5df39%3A0x7656f2452b368c77!2s5-1-20%2C%201st%20St%2C%20Raj%20Nagar%2C%20Shanthi%20Nagar%2C%20Koodal%20Nagar%2C%20Madurai%2C%20Tamil%20Nadu%20625018!5e0!3m2!1sen!2sin!4v1758268306965!5m2!1sen!2sin" />
      </section>
      {/*End Map Section*/}

    </>
  )
}
