import Link from 'next/link';
import React from 'react';

const BlogOne = ({ alternate }) => {
    const data = [
        {
          thumb_img: "news-1.jpg",
          title: "Five Ways that can develop your business website",
        },
        {
          thumb_img: "news-1.jpg",
          title: "TFive Ways that can develop your business websiteS",
        },
        {
          thumb_img: "news-1.jpg",
          title: "Five Ways that can develop your business website",
        }
      ];
    return (
        <>
            {/* News Section */}
            <section className="news-section">
                <div className="auto-container">
                    <div className="row">

                        {data.map((item, i) => (
                            <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                              <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src={`images/resource/${item.thumb_img}`} title="digima" /></Link></figure>
                                <span className="date">20<br /> SEP</span>
                              </div>
                              <div className="lower-content">
                                <div className="author-thumb"><img src={`images/resource/${item.thumb_img}`} title="digima" /></div>
                                <ul className="post-info">
                                  <li>by Admin</li>
                                  <li>2 Comments</li>
                                </ul>
                                <h4 className="title"><a href="news-details">{item.Title}</a></h4>
                                <Link href="news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right" /></Link>
                              </div>
                            </div>
                          </div>
                        ))}

                    </div>
                </div>
            </section>
            {/*End News Section */}
        </>
    );
};

export default BlogOne;