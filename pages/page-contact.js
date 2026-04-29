import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ContactSection from "@/components/sections/Contact/ContactSection";
import MapInner from "@/components/sections/MapInner";

export default function ContactPage() {
    return (
        <>
            <Layout HeaderStyle="two">
                <PageTitle
                    pageName="Contact Us"
                    bgImage="https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=1600&h=900&auto=format&fit=crop&q=80"
                />
                <ContactSection />
                <MapInner />
            </Layout>
        </>
    )
}
