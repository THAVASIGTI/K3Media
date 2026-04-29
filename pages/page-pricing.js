import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import PricingInner from "../components/sections/PricingInner";

export default function PricingPage() {
    return (
        <>
            <Layout HeaderStyle="two">
                <PageTitle
                    pageName="Pricing"
                    bgImage="https://images.unsplash.com/photo-1559067096-49ebca3406aa?w=1600&h=900&auto=format&fit=crop&q=80"
                />
                <PricingInner />
            </Layout>
        </>
    )
}
