import React from 'react';
import Layout from "../components/layout/Layout";
import Home1_Section3_about1 from "@/components/sections/Home1/Home1_Section3_about1";
import Home1_Section8_team1 from "@/components/sections/Home1/Home1_Section8_team1";
import Home1_Section5_features2 from "@/components/sections/Home1/Home1_Section5_features2";
import Home1_Section4_video1 from "@/components/sections/Home1/Home1_Section4_video1";
import PageTitle from "../components/sections/PageTitle";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="two">
                <PageTitle pageName="About Us" />
                <Home1_Section3_about1 />
                <Home1_Section4_video1 />
                <Home1_Section5_features2 />
                <Home1_Section8_team1 />
            </Layout>
        </>
    )
}
