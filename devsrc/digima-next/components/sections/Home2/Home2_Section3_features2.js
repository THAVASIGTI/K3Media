
export default function Home2_Section3() {

    const data = [
        {
            img: "feature-1.jpg",
            title: "Full Design Freedom",
            icon: "icon flaticon-design"
        },
        {
            img: "feature-2.jpg",
            title: "Rules of development",
            icon: "icon flaticon-research-and-development"
        },
        {
            img: "feature-3.jpg",
            title: "offering new features",
            icon: "icon flaticon-sharing"
        },
    ];


    return (
        <>
            {/* Features Section */}
            <section className="features-section pt-0">
                <div className="auto-container">
                    <div className="row">
                        {data.map((item, i) => (
                            <div className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box ">
                                    <div className="image-box">
                                        <figure className="image"><a href="page-service-details">
                                            <img src={`images/resource/${item.img}`} alt />
                                        </a></figure>
                                        <i className={item.icon} />
                                    </div>
                                    <div className="content-box">
                                        <h5 className="title"><a href="page-service-details">{item.title}</a></h5>
                                        <a href="page-service-details" className="read-more"><i className="lnr-icon-arrow-right" /></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* End Features Section */}

        </>
    )
}
