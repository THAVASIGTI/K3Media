import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServicesGrid from "@/components/sections/Services/ServicesGrid";
import ServicesProcess from "@/components/sections/Services/ServicesProcess";
import ServicesCTA from "@/components/sections/Services/ServicesCTA";

export default function ServicesPage() {
    return (
        <>
            <Layout HeaderStyle="two">
                <PageTitle
                    pageName="Our Services"
                    bgImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&h=900&auto=format&fit=crop&q=80"
                />
                <ServicesGrid />
                <ServicesProcess />
                <ServicesCTA />
            </Layout>
        </>
    )
}
