import React from 'react'
import TestimonialSliderOne from '@/components/slider/TestimonialSlierOne'

export default function Home1_Section6() {
  return (
    <>
      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="bg" style={{ backgroundImage: 'url(./images/background/1.jpg)' }} />
        <div className="auto-container">
          <div className="testimonials">
            <TestimonialSliderOne/>
          </div>
        </div>
      </section>
      {/* End Testimonial Section */}


    </>
  )
}
