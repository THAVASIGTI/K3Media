
export default function Home2_Section13() {
    const data = [
        {
            img: "news-1.jpg",
            title: "Five Ways that can develop your business website"
        },
        {
            img: "news-2.jpg",
            title: "Five Ways that can develop your business website"
        },
        {
            img: "news-3.jpg",
            title: "Five Ways that can develop your business website"
        }
    ];
    return (
        <>
            {/* News Section */}
            <section className="news-section">
                <div className="bg bg-pattern-3" />
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">From the Blog</span>
                        <h2>News &amp; Articles</h2>
                    </div>
                    <div className="row">
                        {/* News Block */}
                        {data.map((item, i) => (
                            <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><a href="news-details">
                                            <img src={`images/resource/${item.img}`} alt /></a>
                                        </figure>
                                        <span className="date">20<br /> SEP</span>
                                    </div>
                                    <div className="lower-content">
                                        <div className="author-thumb"><img src="images/resource/avatar.jpg" alt /></div>
                                        <ul className="post-info">
                                            <li>by Admin</li>
                                            <li>2 Comments</li>
                                        </ul>
                                        <h4 className="title"><a href="news-details">{item.title}</a></h4>
                                        <a href="news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right" /></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/*End News Section */}

        </>
    )
}
