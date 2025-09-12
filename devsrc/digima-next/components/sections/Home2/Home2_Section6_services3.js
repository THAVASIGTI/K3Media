
export default function Home2_Section6() {
    const data = [
        {
            title: "IT Management",
            icon: "icon flaticon-innovation"
        },
        {
            title: "Cyber Security",
            icon: "icon flaticon-cyber-security"
        },
        {
            title: "Software Development",
            icon: "icon flaticon-webpage"
        },
    ];
    return (
        <>
            {/* Services Section Three*/}
            <section className="services-section-three">
                <div className="bg" style={{ backgroundImage: 'url(./images/background/4.jpg)' }} />
                <div className="auto-container">
                    <div className="sec-title light text-center">
                        <div className="logo"><img src="images/favicon.png" alt /></div>
                        <h3>IT Solutions &amp; Services <br />at your Fingertips</h3>
                    </div>
                    <div className="row">
                        {/* Service Block */}
                        {data.map((item, i) => (
                            <div className="service-block-three col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="content">
                                        <i className={item.icon} />
                                        <h6 className="title"><a href="page-service-details">{item.title}</a></h6>
                                        <div className="text">Lorem Ipsum. Proin nibh vel velit auctor</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bottom-box">Digima provides best Web Design SErvices for your business. <a href="page-services">Find Your Solution</a></div>
                </div>
            </section>
            {/* End Services Section Two */}

        </>
    )
}
