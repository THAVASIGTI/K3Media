import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceDetails from "../components/sections/ServiceDetails";

export default function ServiceDetailsPage() {
    return (
        <>
            <Layout HeaderStyle="two">
                <PageTitle
                    pageName="SEO & Search Marketing"
                    bgImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&h=900&auto=format&fit=crop&q=80"
                />
                <ServiceDetails />
            </Layout>
        </>
    )
}
