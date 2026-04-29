import React from 'react';
import Layout from "../components/layout/Layout";import PageTitle from "../components/sections/PageTitle";
import AboutIntro from "@/components/sections/About/AboutIntro";
import AboutMission from "@/components/sections/About/AboutMission";
import AboutFeatures from "@/components/sections/About/AboutFeatures";
// import AboutTeam from "@/components/sections/About/AboutTeam";
// import AboutVideo from "@/components/sections/About/AboutVideo";

export default function AboutPage() {
    return (
        <>
            <Layout HeaderStyle="two">
                <PageTitle pageName="About Us" bgImage="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1600&h=900&auto=format&fit=crop&q=80" />
                <AboutIntro />
                <AboutMission />
                {/* <AboutVideo /> */}
                <AboutFeatures />
                {/* <AboutTeam /> */}
            </Layout>
        </>
    )
}
