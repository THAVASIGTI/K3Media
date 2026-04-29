import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function AboutVideo() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="UKgh5psujnE" onClose={() => setOpen(false)} />
            <section className="video-section">
                <div className="auto-container">
                    <div className="video-box">
                        <div className="bg">
                            <div className="bg bg-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1515705576963-95cad62945b6?w=1600&h=900&auto=format&fit=crop&q=80)' }} />
                            <div className="overlay" />
                        </div>
                        <div className="content">
                            <div className="btn-box">
                                <a className="play-now" onClick={() => setOpen(true)}>
                                    <i className="icon fa fa-play" aria-hidden="true" />
                                    <span className="ripple" />
                                </a>
                            </div>
                            <h2 className="title">Your Growth, Our Mission</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
