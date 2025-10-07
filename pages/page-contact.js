import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import Home1_Section13_contact1 from "@/components/sections/Home1/Home1_Section13_contact1";
import MapInner from "@/components/sections/MapInner";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="two">
                <PageTitle pageName="Contact" />
                <Home1_Section13_contact1 />
                <MapInner />
            </Layout>
        </>
    )
}
