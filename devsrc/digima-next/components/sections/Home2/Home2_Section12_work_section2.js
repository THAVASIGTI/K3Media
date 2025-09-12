import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const percentage = 90;
const percentage2 = 50;
export default function Home2_Section12() {
  return (
    <>
      {/* Work Section Two */}
      <section className="work-section-two">
        <div className="bg-outer"><div className="bg" style={{ backgroundImage: 'url(./images/background/6.jpg)' }} /></div>
        <div className="auto-container">
          <div className="row">
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title light">
                  <span className="sub-title">We can help you</span>
                  <h2>We’re standout experts <br />in the business</h2>
                  <div className="text">We can help with both your work and personal life tasks, letting you focus on what’s most important. simply are many variations of passages of orem Ipsum available, but the majority.</div>
                </div>
                <ul className="features-list">
                  <li><span className="count">01</span> Full DESIGN FREEDOM<br /> for everyone</li>
                  <li><span className="count">02</span> Make website <br />without a codings</li>
                </ul>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="graph-box">
                  <div className="row g-0">
                    {/* Pie Graph */}
                    <div className="pie-graph col-lg-6 col-md-6 col-sm-6">
                      <div className="inner">
                        <div className="graph-outer">
                          <div style={{ display: 'inline', width: 140, height: 140 }}>
                            <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={2} styles={buildStyles({
                              textColor: "#fff",
                              pathColor: "#fff",
                              trailColor: "#d0912f"
                            })} />
                          </div>
                        </div>
                        <h6 className="title">Quality <br />Services</h6>
                      </div>
                    </div>
                    {/* Pie Graph */}
                    <div className="pie-graph col-lg-6 col-md-6 col-sm-6">
                      <div className="inner">
                        <div className="graph-outer">
                          <div style={{ display: 'inline', width: 140, height: 140 }}>
                            <CircularProgressbar value={percentage2} text={`${percentage2}%`} strokeWidth={2} styles={buildStyles({
                              textColor: "#fff",
                              pathColor: "#fff",
                              trailColor: "#d0912f"
                            })} />
                          </div>
                        </div>
                        <h6 className="title">Expert <br />employees</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Work Section Two */}

    </>
  )
}
