import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'


export default function Home1_Section4() {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      {/* Video Section */}
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="UKgh5psujnE" onClose={() => setOpen(false)} />
      <section className="video-section">
        <div className="auto-container">
          <div className="video-box">
            <div className="bg">
              <div className="bg bg-image" style={{ backgroundImage: 'url(./images/background/2.jpg)' }} />
              <div className="overlay" />
            </div>
            <div className="content">
              <div className="btn-box">
                <a className="play-now" onClick={() => setOpen(true)}><i className="icon fa fa-play" aria-hidden="true" /><span className="ripple" /></a>
              </div>
              <h2 className="title">Most Trusted Agency</h2>
            </div>
          </div>
        </div>
      </section>
      {/*End Video Section */}
    </>
  )
}
