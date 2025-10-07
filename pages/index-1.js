// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Home1_Section10_funfact1 from "@/components/sections/Home1/Home1_Section10_funfact1";
import Home1_Section11_why_choose_us1 from "@/components/sections/Home1/Home1_Section11_why_choose_us1";
import Home1_Section12_projects1 from "@/components/sections/Home1/Home1_Section12_projects1";
import Home1_Section13_contact1 from "@/components/sections/Home1/Home1_Section13_contact1";
import Home1_Section14_news1 from "@/components/sections/Home1/Home1_Section14_news1";
import Home1_Section15_call_to_action1 from "@/components/sections/Home1/Home1_Section15_call_to_action1";
import Home1_Section2_service1 from "@/components/sections/Home1/Home1_Section2_service1";
import Home1_Section3_about1 from "@/components/sections/Home1/Home1_Section3_about1";
import Home1_Section4_video1 from "@/components/sections/Home1/Home1_Section4_video1";
import Home1_Section5_features2 from "@/components/sections/Home1/Home1_Section5_features2";
// import Home1_Section6 from "@/components/sections/Home1/Home1_Section6";
import Home1_Section7_clients1 from "@/components/sections/Home1/Home1_Section7_clients1";
import Home1_Section8_team1 from "@/components/sections/Home1/Home1_Section8_team1";
import Home1_Section9_about2 from "@/components/sections/Home1/Home1_Section9_about2";
import React from "react";
import Layout from "../components/layout/Layout";
import Home1_Section1_slider1 from "../components/sections/Home1/Home1_Section1_slider1";

import dynamic from 'next/dynamic'

const Home1_Section6_testimonial1 = dynamic(() => import('@/components/sections/Home1/Home1_Section6_testimonial1'), {
  ssr: false,
})


export default function Home1() {
    return (
        <>
            <Layout HeaderStyle="one">
                <Home1_Section1_slider1 />
                <Home1_Section2_service1 />
                <Home1_Section3_about1 />
                <Home1_Section4_video1 />
                <Home1_Section5_features2 />
                <Home1_Section6_testimonial1 />
                <Home1_Section7_clients1 />
                <Home1_Section8_team1 />
                <Home1_Section9_about2 />
                <Home1_Section10_funfact1 />
                <Home1_Section11_why_choose_us1 />
                <Home1_Section12_projects1 />
                <Home1_Section13_contact1 />
                <Home1_Section14_news1 />
                <Home1_Section15_call_to_action1 />
            </Layout>
        </>
    );
}