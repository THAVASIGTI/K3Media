
export default function Home1_Section8() {
    const data = [
        {
            img:"team-1.jpg",
            title: "Mike Hardson",
            desig: "Designer"

        },
        {
            img:"team-2.jpg",
            title: "ALEESHA BROWN",
            desig: "Designer"

        },
        {
            img:"team-3.jpg",
            title: "MICHALE SMITH",
            desig: "Designer"

        }
    ];


    return (
        <>
            {/* Team Section */}
            <section className="team-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">our team members</span>
                        <h2>Meet the experts</h2>
                    </div>
                    <div className="row">
                        {/* Team block */}
                        {data.map((item, i) => (
                            <div className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><a href="page-team-details"><img src={`images/resource/${item.img}`} alt /></a></figure>
                                        <div className="social-links">
                                            <a href="#"><i className="fab fa-twitter" /></a>
                                            <a href="#"><i className="fab fa-facebook" /></a>
                                            <a href="#"><i className="fab fa-pinterest-p" /></a>
                                            <a href="#"><i className="fab fa-instagram" /></a>
                                        </div>
                                        <span className="share-icon fa fa-share-alt" />
                                    </div>
                                    <div className="info-box">
                                        <h5 className="name"><a href="page-team-details">{item.title}</a></h5>
                                        <span className="designation">{item.desig}</span>
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
