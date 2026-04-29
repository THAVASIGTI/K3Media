import Link from 'next/link';
import React from 'react';


const PageTitle = (props) => {
  const bg = props.bgImage || 'images/resource/page-title.jpg';
  return (
            <section className="page-title" style={{ backgroundImage: `url(${bg})` }}>
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">{props.pageName}</h1>
                        <ul className="page-breadcrumb">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">Pages</Link></li>
                            <li>{props.pageName}</li>
                        </ul>
                    </div>
                </div>
            </section>
  );
};

export default PageTitle;