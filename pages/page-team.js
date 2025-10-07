import React from 'react';
import Layout from "../components/layout/Layout";
import Home1_Section8_team1 from "@/components/sections/Home1/Home1_Section8_team1";
import PageTitle from "../components/sections/PageTitle";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="two">
                <PageTitle pageName="Team Grid" />
                <Home1_Section8_team1 />
            </Layout>
        </>
    )
}
