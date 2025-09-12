import Link from 'next/link';
import React from 'react';

const ProjectOne = ({ addClass }) => {
    const data = [
        {
            img: "project-5.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-6.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-7.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-8.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-6.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-5.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        }
    ];
    return (
        <>
            <section className={`project-section ${addClass}`}>
                <div className="container">
                    <div className="row">
                        {data.map((item, i) => (
                            <div className="col-xl-4 col-lg-6">
                                <div className="project-block-two mb-30">
                                <div class="inner-box">
                                    <div class="image-box">
                                        <figure class="image"><Link href="page-project-details"><img src={`images/resource/${item.img}`} alt /></Link>
                                        </figure>
                                        <Link href="page-project-details" class="read-more"><i class="fa fa-long-arrow-alt-right"></i></Link>
                                        <div class="info-box">
                                            <h4 class="title"><Link href="page-project-details">{item.title}</Link></h4>
                                        </div>
                                        </div>
                                        <div class="overlay-content">
                                            <div class="info-box">
                                                <h4 class="title"><Link href="page-project-details">{item.title}</Link></h4>
                                                <div class="text">{item.desc}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectOne;