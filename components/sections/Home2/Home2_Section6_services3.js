
export default function Home2_Section6() {
    const data = [
        {
            title: "GRAPHIC DESIGN",
            text: "Unique tailored creative posters",
            icon: "icon flaticon-innovation"
        },
        {
            title: "VIDEO REELS",
            text: "Story telling creative videos",
            icon: "icon flaticon-cyber-security"
        },
        {
            title: "AD CAMPAIGN",
            text: "Highest reach on your budget",
            icon: "icon flaticon-webpage"
        },
    ];
    return (
        <>
            {/* Services Section Three*/}
            <section className="services-section-three">
                <div className="bg" style={{ backgroundImage: 'url(./images/background/8.png)' }} />
                <div className="auto-container">
                    <div className="sec-title light text-center">
                        {/* <div className="logo"><img src="images/favicon.png" alt /></div> */}
                        <h3>SOCIAL MEDIA MARKETING FOR YOUR BUSINESS</h3>
                    </div>
                    <div className="row">
                        {/* Service Block */}
                        {data.map((item, i) => (
                            <div className="service-block-three col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="content">
                                        <i className={item.icon} />
                                        <h6 className="title"><a href="page-service-details">{item.title}</a></h6>
                                        <div className="text">{item.text}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="bottom-box">K3 Media provides best Digital Marketing Solutions for your business <a href="page-services">Find Your Solution</a></div> */}
                </div>
            </section>
            {/* End Services Section Two */}

        </>
    )
}
