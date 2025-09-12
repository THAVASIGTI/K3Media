import ProjectSliderTwo from '@/components/slider/ProjectSliderTwo'
import React from 'react'

export default function Home2_Section8() {
  return (
    <>
      {/* Projects Section Two*/}
      <section className="projects-section-two pt-5">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">recent portfolio</span>
            <h2>Our Recent work</h2>
          </div>
          <div className="carousel-outer">
            <div className="projects-carousel-two owl-carousel owl-theme default-navs">
              {/* Project Block*/}
              <ProjectSliderTwo/>
              </div>
          </div>
        </div>
      </section>
      {/* End Projects Section Two */}

    </>
  )
}
