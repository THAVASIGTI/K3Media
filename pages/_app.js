import { useEffect } from "react";
import "swiper/css";
// import "swiper/css/navigation";
import '../node_modules/react-modal-video/css/modal-video.min.css'
import '../public/css/bootstrap.min.css';
import '../public/css/style.css';


export default function App({ Component, pageProps }) {

  // useEffect(() => {
  //   if(typeof window !== 'undefined'){
  //     window.WOW = require('wowjs'); 
  //   }
  //   new WOW.WOW().init();
  // });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs").WOW;
      // new WOW().init();
    }
  }, []);

  return <Component {...pageProps} />
}
