import React from 'react'

export default function Home2_Section9() {
  return (
    <>
      {/* Why Choose US Two*/}
      <section className="why-choose-us-two pt-0">
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="600ms">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="sub-title">Why Choose us?</span>
                    <h2>We made things easier <br />for your business</h2>
                    <div className="text">We build your brand identity with impactful logos, posters, and videos, making it easier for your business to connect and reach your audience effectively</div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="feature-box">
                        <i className="icon flaticon-development" />
                        <h6 className="title">Businesses <br />Growth</h6>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="feature-box">
                        <i className="icon flaticon-social-media" />
                        <h6 className="title">Marketing <br /> Solution</h6>
                      </div>
                    </div>
                  </div>
                  <a href="page-about" className="theme-btn btn-style-one dark-bg"><span className="btn-title">Explore Now</span></a>
                </div>
              </div>
              {/* Image Column */}
              <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12">
                <div className="row">
                  <div className="image-column col-lg-6 col-md-6 col-sm-12">
                    <div className="image-box">
                      <figure className="image overlay-anim"><img src="images/resource/why-us-3.png"  alt /></figure>
                    </div>
                  </div>
                  <div className="info-column col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-column">
                      <div className="info">
                        <h6 className="title">Best <br />Consultatncy</h6>
                        <div className="text">The wise man therefore always holds in these matters this.</div>
                      </div>
                      <div className="info">
                        <h6 className="title">Expert <br />digital marketing</h6>
                        <div className="text">The wise man therefore always holds in these matters this.</div>
                      </div>
                    </div>
                    <div className="info-box">
                      <i className="icon flaticon-marketing" />
                      <h6 className="title">top Quality Marketing Solutions</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Emd Why Choose US Two */}

    </>
  )
}
