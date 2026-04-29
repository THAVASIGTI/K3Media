import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import FaqInner from "../components/sections/FaqInner";

export default function FaqPage() {
    return (
        <>
            <Layout HeaderStyle="two">
                <PageTitle
                    pageName="FAQ"
                    bgImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=900&auto=format&fit=crop&q=80"
                />
                <FaqInner />
            </Layout>
        </>
    )
}
