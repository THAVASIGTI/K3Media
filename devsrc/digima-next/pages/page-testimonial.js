import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import Home2_Section15_testimonial3 from "@/components/sections/Home2/Home2_Section15_testimonial3";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="two">
              <PageTitle pageName="Testimonials" />
              <Home2_Section15_testimonial3 />
            </Layout>
        </>
    )
}
