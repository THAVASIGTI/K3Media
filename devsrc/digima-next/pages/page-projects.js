import React from 'react';
import Layout from "../components/layout/Layout";
import ProjectGrid from "../components/sections/ProjectGrid";
import PageTitle from "../components/sections/PageTitle";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="two">
                <PageTitle pageName="Projects Grid" />
                <ProjectGrid />
            </Layout>
        </>
    )
}
