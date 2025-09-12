import ProjectSliderOne from '@/components/slider/ProjectSliderOne'

export default function Home1_Section12() {
    return (
        <>
            {/* Projects Section*/}
            <section className="projects-section">
                <div className="upper-box">
                    <div className="auto-container">
                        <div className="sec-title">
                            <span className="sub-title">our portfolio</span>
                            <h2>our recent work</h2>
                        </div>
                    </div>
                </div>
                <div className="carousel-outer">
                    {/*clients carousel*/}
                    <div className="projects-carousel owl-carousel owl-theme default-navs">
                        <ProjectSliderOne />
                    </div>
                </div>
            </section>
            {/*End Projects Section */}


        </>
    )
}
