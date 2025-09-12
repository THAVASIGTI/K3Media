import ClientSliderOne from '@/components/slider/ClientSliderOne'
import { useState } from 'react'

export default function Home1_Section7() {
    const [Active, setActive] = useState(1)

    return (
        <>
            {/* Clients Section   */}
            <section className="clients-section pull-up">
                <div className="bg bg-pattern-3" />
                <div className="auto-container">
                    <div className="default-tabs tabs-box">
                        {/*Tabs Box*/}
                        <ul className="tab-buttons clearfix">
                            <li className={`tab-btn'  ${Active == 1 ? 'active-btn' : ''}`} data-tab="#tab1"><span className="title" onClick={() => setActive(1)}>Our Missions</span></li>
                            <li className={`tab-btn'  ${Active == 2 ? 'active-btn' : ''}`} data-tab="#tab2"><span className="title" onClick={() => setActive(2)}>Our Visions</span></li>
                            <li className={`tab-btn'  ${Active == 3 ? 'active-btn' : ''}`} data-tab="#tab3"><span className="title" onClick={() => setActive(3)}>Our History</span></li>
                        </ul>
                        <div className="tabs-content">
                            {/*Tab*/}
                            <div className={`tab  ${Active == 1 ? 'active-tab' : ''}`} id="tab1">
                                <div className="tab-block">
                                    <div className="row">
                                        <div className="image-column col-lg-4 col-md-6 col-sm-12">
                                            <div className="image-box">
                                                <figure className="image"><img src="images/resource/tab-img.jpg" alt /></figure>
                                                <i className="icon flaticon-mission" />
                                            </div>
                                        </div>
                                        <div className="text-column col-lg-4 col-md-6 col-sm-12">
                                            <div className="text">There are many variations of passages of available but simply free text available in the market sit amed majority alteration in some form, by humouor.</div>
                                        </div>
                                        <div className="list-column col-lg-4 col-md-6 col-sm-12">
                                            <div className="list-outer">
                                                <ul className="list-style-two">
                                                    <li><i className="fa fa-check-circle" /> Nsectetur cing elit</li>
                                                    <li><i className="fa fa-check-circle" /> Suspe ndisse suscip sagittis leo</li>
                                                    <li><i className="fa fa-check-circle" /> Entum estib dignissim posuere</li>
                                                    <li><i className="fa fa-check-circle" /> If you are going to use a pass</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Tab*/}
                            <div className={`tab ${Active == 2 ? 'active-tab' : ''}`} id="tab2" >
                                <div className="tab-block">
                                    <div className="row">
                                        <div className="image-column col-lg-4 col-md-6 col-sm-12">
                                            <div className="image-box">
                                                <figure className="image"><img src="images/resource/tab-img.jpg" alt /></figure>
                                                <i className="icon flaticon-mission" />
                                            </div>
                                        </div>
                                        <div className="text-column col-lg-4 col-md-6 col-sm-12">
                                            <div className="text">There are many variations of passages of available but simply free text available in the market sit amed majority alteration in some form, by humouor.</div>
                                        </div>
                                        <div className="list-column col-lg-4 col-md-6 col-sm-12">
                                            <div className="list-outer">
                                                <ul className="list-style-two">
                                                    <li><i className="fa fa-check-circle" /> Nsectetur cing elit</li>
                                                    <li><i className="fa fa-check-circle" /> Suspe ndisse suscip sagittis leo</li>
                                                    <li><i className="fa fa-check-circle" /> Entum estib dignissim posuere</li>
                                                    <li><i className="fa fa-check-circle" /> If you are going to use a pass</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Tab*/}
                            <div className={`tab  ${Active == 3 ? 'active-tab' : ''}`} id="tab3">
                                <div className="tab-block">
                                    <div className="row">
                                        <div className="image-column col-lg-4 col-md-6 col-sm-12">
                                            <div className="image-box">
                                                <figure className="image"><img src="images/resource/tab-img.jpg" alt /></figure>
                                                <i className="icon flaticon-mission" />
                                            </div>
                                        </div>
                                        <div className="text-column col-lg-4 col-md-6 col-sm-12">
                                            <div className="text">There are many variations of passages of available but simply free text available in the market sit amed majority alteration in some form, by humouor.</div>
                                        </div>
                                        <div className="list-column col-lg-4 col-md-6 col-sm-12">
                                            <div className="list-outer">
                                                <ul className="list-style-two">
                                                    <li><i className="fa fa-check-circle" /> Nsectetur cing elit</li>
                                                    <li><i className="fa fa-check-circle" /> Suspe ndisse suscip sagittis leo</li>
                                                    <li><i className="fa fa-check-circle" /> Entum estib dignissim posuere</li>
                                                    <li><i className="fa fa-check-circle" /> If you are going to use a pass</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Sponsors Outer */}
                    <div className="sponsors-outer">
                        {/*clients carousel*/}
                        <ul className="clients-carousel">
                            <ClientSliderOne />
                        </ul>
                    </div>
                </div>
            </section>
            {/*End Clients Section */}


        </>
    )
}
