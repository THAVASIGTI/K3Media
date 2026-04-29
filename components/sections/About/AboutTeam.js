import React from 'react'

export default function AboutTeam() {
    const data = [
        {
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&auto=format&fit=crop&crop=faces&q=80",
            name: "Sarah Johnson",
            role: "SEO Strategist",
        },
        {
            img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&auto=format&fit=crop&crop=faces&q=80",
            name: "David Chen",
            role: "Content & Social Lead",
        },
        {
            img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=800&auto=format&fit=crop&crop=faces&q=80",
            name: "Emma Williams",
            role: "Paid Media Manager",
        }
    ]

    return (
        <>
            {/* Team Section */}
            <section className="team-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Our Expert Team</span>
                        <h2>The People Behind Your Growth</h2>
                    </div>
                    <div className="row">
                        {data.map((item, i) => (
                            <div key={i} className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <a href="page-team-details">
                                                <img src={item.img} alt={item.name} />
                                            </a>
                                        </figure>
                                        <div className="social-links">
                                            <a href="#"><i className="fab fa-twitter" /></a>
                                            <a href="#"><i className="fab fa-linkedin" /></a>
                                            <a href="#"><i className="fab fa-instagram" /></a>
                                        </div>
                                        <span className="share-icon fa fa-share-alt" />
                                    </div>
                                    <div className="info-box">
                                        <h5 className="name"><a href="page-team-details">{item.name}</a></h5>
                                        <span className="designation">{item.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* End Team Section */}
        </>
    )
}
