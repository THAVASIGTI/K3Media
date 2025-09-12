import TestimonialSliderTwo from '@/components/slider/TestimonialSliderTwo'
import React from 'react'

export default function Home2_Section5() {
  return (
    <>
      {/* Testimonial Section Two */}
      <section className="testimonial-section-two">
        <div className="bg bg-pattern-2" />
        <div className="auto-container">
          <div className="row">
            {/* Title Column */}
            <div className="title-column col-xl-3 col-lg-12">
              <div className="sec-title">
                <span className="sub-title">our feedbacks</span>
                <h2>what they’re <br />talking?</h2>
                <div className="text">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean solldin, lorem is simply free text quis bibendum.</div>
              </div>
            </div>
            {/* Testimonial Column */}
            <div className="testimonial-column col-xl-9 col-lg-12">
              <div className="inner-column">
                {/* Testimonial Carousel */}
                <div className="testimonial-carousel owl-carousel owl-theme">
                  {/* Testimonial Block */}
                  <TestimonialSliderTwo/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Testimonial Section */}

    </>
  )
}
