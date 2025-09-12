import React, { useState } from 'react'

export default function Home2_Section11() {
  const [Active, setActive] = useState(2)
  return (
    <>
      {/* Work Section*/}
      <section className="work-section">
        <div className="bg bg-pattern-9" />
        <div className="upper-box">
          <div className="auto-container">
            <div className="bg bg-pattern-8" />
            <div className="sec-title light text-center">
              <i className="icon flaticon-wealth" />
              <h1>Improve and Innovate <br />with <span className="highlighted">Tech</span> Trends</h1>
            </div>
          </div>
        </div>
        <div className="auto-container">
          <div className="tabs-box work-tabs">
            {/*Tabs Box*/}
            <ul className="tab-buttons clearfix">
              <li className={`tab-btn  ${Active==1 ? 'active-btn' : '' }`} onClick={()=> setActive(1)}><span className="title">App Development</span></li>
              <li className={`tab-btn  ${Active==2 ? 'active-btn' : '' }`} onClick={()=> setActive(2)}><span className="title">UI UX Design</span></li>
              <li className={`tab-btn  ${Active==3 ? 'active-btn' : '' }`} onClick={()=> setActive(3)}><span className="title">Software Security</span></li>
            </ul>
            <div className="tabs-content">
              {/*Tab*/}
              <div className={`tab  ${Active==1 ? 'active-tab' : '' }`} >
                <div className="row">
                  <div className="blocks-column col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-column">
                      {/* Work Block */}
                      <div className="work-block">
                        <div className="inner-box">
                          <span className="icon fa fa-check" />
                          <h6 className="title">Highest design quality</h6>
                          <div className="text">Lorem ipsum dolor sit amet, consectetur notte adipisicing elit sed do.</div>
                        </div>
                      </div>
                      {/* Work Block */}
                      <div className="work-block">
                        <div className="inner-box">
                          <span className="icon fa fa-check" />
                          <h6 className="title">100% User Satisfaction</h6>
                          <div className="text">Lorem ipsum dolor sit amet, consectetur notte adipisicing elit sed do.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="image-column col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-column">
                      <div className="info-box">
                        <i className="icon flaticon-experience" />
                        <h3 className="title">We have over 24 years of experience</h3>
                        <a href="#" className="read-more">Read More</a>
                      </div>
                      <figure className="image overlay-anim"><img src="images/resource/work-1.jpg" alt /></figure>
                    </div>
                  </div>
                </div>
              </div>
              {/*Tab*/}
              <div className={`tab  ${Active==2 ? 'active-tab' : '' }`} >
                <div className="row">
                  <div className="blocks-column col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-column">
                      {/* Work Block */}
                      <div className="work-block">
                        <div className="inner-box">
                          <span className="icon fa fa-check" />
                          <h6 className="title">Highest design quality</h6>
                          <div className="text">Lorem ipsum dolor sit amet, consectetur notte adipisicing elit sed do.</div>
                        </div>
                      </div>
                      {/* Work Block */}
                      <div className="work-block">
                        <div className="inner-box">
                          <span className="icon fa fa-check" />
                          <h6 className="title">100% User Satisfaction</h6>
                          <div className="text">Lorem ipsum dolor sit amet, consectetur notte adipisicing elit sed do.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="image-column col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-column">
                      <div className="info-box">
                        <i className="icon flaticon-experience" />
                        <h3 className="title">We have over 24 years of experience</h3>
                        <a href="#" className="read-more">Read More</a>
                      </div>
                      <figure className="image overlay-anim"><img src="images/resource/work-1.jpg" alt /></figure>
                    </div>
                  </div>
                </div>
              </div>
              {/*Tab*/}
              <div className={`tab  ${Active==3 ? 'active-tab' : '' }`} >
                <div className="row">
                  <div className="blocks-column col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-column">
                      {/* Work Block */}
                      <div className="work-block">
                        <div className="inner-box">
                          <span className="icon fa fa-check" />
                          <h6 className="title">Highest design quality</h6>
                          <div className="text">Lorem ipsum dolor sit amet, consectetur notte adipisicing elit sed do.</div>
                        </div>
                      </div>
                      {/* Work Block */}
                      <div className="work-block">
                        <div className="inner-box">
                          <span className="icon fa fa-check" />
                          <h6 className="title">100% User Satisfaction</h6>
                          <div className="text">Lorem ipsum dolor sit amet, consectetur notte adipisicing elit sed do.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="image-column col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-column">
                      <div className="info-box">
                        <i className="icon flaticon-experience" />
                        <h3 className="title">We have over 24 years of experience</h3>
                        <a href="#" className="read-more">Read More</a>
                      </div>
                      <figure className="image overlay-anim"><img src="images/resource/work-1.jpg" alt /></figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-box">Digima provides best Web Design SErvices for your business. <a href="#">Find Your Solution</a></div>
        </div>
      </section>
      {/*Emd Work Section */}

    </>
  )
}
