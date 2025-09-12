import React, { useState } from 'react'
import CounterUp from '@/components/elements/CounterUp'
import ModalVideo from 'react-modal-video'

export default function Home2_Section10() {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      {/* Fun Fact Section */}
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="BmzySq3FInI" onClose={() => setOpen(false)} />
      <section className="fun-fact-section-two">
        <div className="bg" style={{ backgroundImage: 'url(./images/background/5.jpg)' }} />
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              <div className="title-column col-lg-7 col-md-12 col-sm-12">
                <div className="inner-column">
                  <a  onClick={() => setOpen(true)}  className="play-now" data-fancybox="gallery" data-caption><i className="icon fa fa-play" aria-hidden="true" /><span className="ripple" /></a>
                  <div className="sec-title light">
                    <h2>Leading the best digital agency in town</h2>
                  </div>
                </div>
              </div>
              <div className="column col-lg-5 col-md-8 col-md-12 col-sm-12">
                <div className="fact-counter">
                  {/* Counter block*/}
                  <div className="counter-block-two wow fadeInUp">
                    <div className="inner overlay-anim">
                      <div className="content">
                        <div className="count-box"><CounterUp count={437} time={3}/></div>
                        <h6 className="counter-title">We have satisfied customers</h6>
                      </div>
                    </div>
                  </div>
                  {/*Counter block*/}
                  <div className="counter-block-two wow fadeInUp" data-wow-delay="300ms">
                    <div className="inner overlay-anim">
                      <div className="content">
                        <div className="count-box"><CounterUp count={2563} time={3}/></div>
                        <h6 className="counter-title">Projects has been completed</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Fun Fact Section Two*/}

    </>
  )
}
