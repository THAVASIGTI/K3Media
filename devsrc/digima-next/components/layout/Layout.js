import { useEffect, useState } from 'react';
import BackToTop from '../elements/BackToTop';
import Footer from './Footer';
import Header1 from './Header1';
import Header2 from './Header2';
import Header1Boxed from './Header1-boxed';
import PageHead from './PageHead';

const Layout = ({ children, HeaderStyle }) => {
    const [searchToggle, setSearchToggled] = useState(false);
    const [scroll, setScroll] = useState(0)
    const handleToggle = () => setSearchToggled(!searchToggle);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })

    const handleOpen = () => {
        document.body.classList.add("mobile-menu-visible");
    }

    const handleRemove = () => {
        document.body.classList.remove("mobile-menu-visible");
    }

    // useEffect(() => {
    //     const WOW = require('wowjs');
    //     window.wow = new WOW.WOW({
    //         live: false
    //     });
    //     window.wow.init();
    // }, []);
    return (
        <>
            <PageHead />
            <div class="page-wrapper" id="top">

                {!HeaderStyle && <Header1 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "one" && <Header1 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "two" && <Header2 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "one-boxed" && <Header1Boxed handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {/* {HeaderStyle === "four" && <Header4 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "five" && <Header5 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />} */}


                {/* <Sidebar /> */}

                {children}

                <Footer />
            </div>
            {/* <BackToTop /> */}

            <BackToTop />
        </>
    );
};

export default Layout;