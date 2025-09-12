import TestimonialSliderThree from '@/components/slider/TestimonialSliderThree'
import React from 'react'

export default function Home2_Section15() {
  return (
    <>
      {/* Testimonial Section Two */}
      <section className="testimonial-section-two">
        <div className="bg bg-pattern-2" />
        <div className="auto-container">
          <div className="row">
            {/* Testimonial Column */}
            <div className="testimonial-column col-xl-12 col-lg-12">
              <div className="inner-column">
                {/* Testimonial Carousel */}
                <div className="testimonial-carousel owl-carousel owl-theme">
                  {/* Testimonial Block */}
                  <TestimonialSliderThree/>
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
