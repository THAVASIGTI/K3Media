import ClientSliderTwo from '@/components/slider/ClientSliderTwo'
import React from 'react'

export default function Home2_Section7() {
  return (
    <>
      {/* Clients Section   */}
      <section className="clients-section alternate">
        <div className="auto-container">
          {/* Sponsors Outer */}
          <div className="sponsors-outer">
            {/*clients carousel*/}
            <ul className="clients-carousel owl-carousel owl-theme">
              <ClientSliderTwo/>
            </ul>
          </div>
        </div>
      </section>
      {/*End Clients Section */}

    </>
  )
}
