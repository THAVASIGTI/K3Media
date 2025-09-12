
export default function Home1_Section2() {
    const data = [
        {
          title: <>{`Web`} <br />{`designing`}</>,
          icon:"icon flaticon-digital-services"
        },
        {
          title: <>{`Graphic`} <br />{`designing`}</>,
          icon:"icon flaticon-graphic-design"
        },
        {
          title: <>{`Digital`} <br />{`marketing`}</>,
          icon:"icon flaticon-technology"
        },
        {
          title: <>{`Apps`} <br />{`development`}</>,
          icon:"icon flaticon-mobile-app"
        },
      ];

    return (
        <>
            {/* Services Section */}
            <section className="services-section">
                <div className="bg bg-pattern-1" />
                <div className="auto-container">
                    <div className="sec-title light">
                        <div className="row">
                            <div className="col-lg-7">
                                <span className="sub-title">our services</span>
                                <h2>Services we offer</h2>
                            </div>
                            <div className="col-lg-5">
                                <div className="text">There are many variations of passages of available but majority alteration in some form, by humou or randomised words.</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    {data.map((item, i) => (
                        <div className="service-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <span className="count">01</span>
                                <h6 className="title"><a href="/page-service-details">{item.title}</a></h6>
                                <i className={item.icon} />
                                <div className="text">Digital agency is an high end test for business, website work</div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* End Services Section */}

        </>
    )
}
