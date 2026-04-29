import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import TestimonialsSection from "@/components/sections/Testimonials/TestimonialsSection";

export default function TestimonialPage() {
    return (
        <>
            <Layout HeaderStyle="two">
                <PageTitle
                    pageName="Testimonials"
                    bgImage="https://images.unsplash.com/photo-1758519290189-b8a631e2fc0b?w=1600&h=900&auto=format&fit=crop&q=80"
                />
                <TestimonialsSection />
            </Layout>
        </>
    )
}
