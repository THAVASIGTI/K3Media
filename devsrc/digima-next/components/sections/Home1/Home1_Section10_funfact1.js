import CounterUp from '@/components/elements/CounterUp';

export default function Home1_Section10() {
    const data = [
        {
            title: "Projects Completed",
            count: 6420,
            icon:"icon flaticon-checking"
        },
        {
            title: "MSATISFIED CLIENTS",
            count: 9280,
            icon:"icon flaticon-recommend"
        },
        {
            title: "EXPERT TEAMS",
            count: 380,
            icon:"icon flaticon-consulting"
        },
    ];

    return (
        <>
            {/* Fun Fact Section*/}
            <section className="fun-fact-section">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="bg bg-pattern-5" />
                        <div className="row">
                            <div className="title-column col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="sec-title light">
                                        <h3>Let’s Start Your Project with Digima</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="column col-lg-8 col-md-8 col-md-12 col-sm-12">
                                <div className="fact-counter">
                                    <div className="row">
                                        {data.map((item, i) => (
                                            <div className="counter-block col-lg-4 col-md-4 col-sm-12 wow fadeInUp">
                                                <div className="inner">
                                                    <div className="content">
                                                        <i className={item.icon} />
                                                        <div className="count-box"><CounterUp count={item.count} time={3} /></div>
                                                        <h6 className="counter-title">{item.title}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Fun Fact Section*/}


        </>
    )
}
