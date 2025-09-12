import React from 'react'

export default function Home1_Section13() {
  return (
    <>
      {/* Contact Section */}
      <section className="contact-section">
        <div className="bg bg-pattern-6" />
        <div className="bg-image"><img src="images/resource/girl.png" alt /></div>
        <div className="auto-container">
          <div className="row">
            {/* Title Column */}
            <div className="title-column col-lg-6 col-md-12">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">contact with us</span>
                  <h2>let’s work together?</h2>
                  <div className="text">Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium doloremque laudantium totam rem.</div>
                </div>
                {/* Contact block */}
                <div className="contact-info-block">
                  <div className="inner">
                    <i className="icon fa fa-phone" />
                    <h6 className="title">Have any question?</h6>
                    <div className="text">Free <a href="tel:230009850">+23 (000)-9850</a></div>
                  </div>
                </div>
                {/* Contact Info block */}
                <div className="contact-info-block">
                  <div className="inner">
                    <i className="icon fa fa-envelope" />
                    <h6 className="title">Send email</h6>
                    <div className="text"><a href="mailto:needhelp@company.com">needhelp@company.com</a></div>
                  </div>
                </div>
                {/* Contact Info block */}
                <div className="contact-info-block">
                  <div className="inner">
                    <i className="icon fa fa-map-marker-alt" />
                    <h6 className="title">Visit anytime</h6>
                    <div className="text">30 broklyn golden street. New York</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Form Column */}
            <div className="form-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                {/* Contact Form */}
                <div className="contact-form wow fadeInLeft">
                  <h2 className="title">Contact us</h2>
                  {/*Contact Form*/}
                  <form method="post" action="get" id="contact-form">
                    <div className="row">
                      <div className="form-group col-lg-12">
                        <input type="text" name="full_name" placeholder="Your Name" required />
                      </div>
                      <div className="form-group col-lg-12">
                        <input type="email" name="Email" placeholder="Email Address" required />
                      </div>
                      <div className="form-group col-lg-12">
                        <textarea name="message" placeholder="Comment" required defaultValue={""} />
                      </div>
                      <div className="form-group col-lg-12">
                        <button className="theme-btn btn-style-one hvr-dark" type="submit" name="submit-form"><span className="btn-title">Write a Message</span></button>
                      </div>
                    </div>
                  </form>
                </div>
                {/*End Contact Form */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Info Section */}


    </>
  )
}
