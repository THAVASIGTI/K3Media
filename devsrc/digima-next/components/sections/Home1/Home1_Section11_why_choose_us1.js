import React from 'react'

export default function Home1_Section11() {
  return (
    <>
      {/* Why Choose US */}
      <section className="why-choose-us">
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="sub-title">Our Benefits</span>
                    <h2>Why you Should Choose <br />Our Services</h2>
                    <div className="text">There are many variations of passages of available but simply free text available in the market sit amed majority alteration in some form, by humouor simply free text available in the market sit amed majority</div>
                  </div>
                  <ul className="list-style-three two-column  ">
                    <li><i className="fa fa-check-circle" /> Suspe ndisse suscip</li>
                    <li><i className="fa fa-check-circle" /> Entum estib dignissim</li>
                  </ul>
                  {/*Skills*/}
                  <div className="skills">
                    {/*Skill Item*/}
                    <div className="skill-item">
                      <div className="skill-header">
                        <h6 className="skill-title">Web Design</h6>
                      </div>
                      <div className="skill-bar">
                        <div className="bar-inner">
                          <div className="bar progress-line" style={{"width":"77%"}} data-width={77}>
                            <div className="skill-percentage">
                              <div className="count-box"><span className="count-text" data-speed={3000} data-stop={77}>77</span>%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Skill Item*/}
                    <div className="skill-item">
                      <div className="skill-header">
                        <h6 className="skill-title">UI UX Design</h6>
                      </div>
                      <div className="skill-bar">
                        <div className="bar-inner">
                          <div className="bar progress-line" style={{"width":"56%"}} data-width={56}>
                            <div className="skill-percentage">
                              <div className="count-box"><span className="count-text" data-speed={3000} data-stop={56}>56</span>%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="image-box">
                    <figure className="image overlay-anim wow fadeInUp"><img src="images/resource/why-us.jpg" alt /></figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Emd Why Choose US */}


    </>
  )
}
