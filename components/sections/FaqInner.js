import React, { useState } from 'react'
import AccordionFAQ from '../elements/AccordionFAQ'

const leftFaqs = [
    {
        q: "What digital marketing services does K3 Media offer?",
        a: "We offer end-to-end digital marketing services including SEO, Social Media Marketing, PPC & Paid Advertising, Content Marketing, Web Design & Development, Email Automation, and full Event Promotion — all under one roof."
    },
    {
        q: "How long does it take to see results from SEO?",
        a: "SEO is a long-term strategy. Most clients see noticeable improvements in rankings and traffic within 3–6 months. Significant, sustainable results typically emerge by month 6–12 depending on competition and domain authority."
    },
    {
        q: "What is your minimum contract period?",
        a: "We recommend a minimum 3-month engagement to allow strategies to take effect and deliver measurable ROI. We also offer flexible month-to-month plans for clients who prefer shorter commitments."
    },
    {
        q: "How do you measure campaign success?",
        a: "We track KPIs including organic traffic growth, conversion rate, cost-per-lead, ROAS (Return on Ad Spend), social engagement rates, and keyword rankings — all available in your real-time reporting dashboard."
    },
    {
        q: "Do you manage ad budgets on our behalf?",
        a: "Yes. We manage your Google Ads and Meta Ads budgets directly, optimising bids and creatives in real-time. Ad spend is billed separately and transparently — you always know exactly where every rupee goes."
    }
]

const rightFaqs = [
    {
        q: "Do you provide event promotion and marketing services?",
        a: "Absolutely. We handle end-to-end digital promotion for events — social media campaigns, email invites, paid ads, influencer outreach, and post-event coverage — to maximise reach and drive registrations."
    },
    {
        q: "What types of events do you promote and manage?",
        a: "We promote corporate conferences, product launches, trade shows, cultural festivals, brand activation events, workshops, music concerts, and virtual webinars across India and internationally."
    },
    {
        q: "How far in advance should we plan event promotion?",
        a: "Ideally 4–6 weeks before the event. For large-scale events (500+ attendees), we recommend 8–12 weeks to build adequate awareness, ticket momentum, and influencer partnerships."
    },
    {
        q: "What platforms do you use for event promotion?",
        a: "We leverage Instagram, Facebook, LinkedIn, Google Ads, WhatsApp Broadcasts, email campaigns, and influencer collaborations — each channel selected and tailored based on your target audience and event type."
    },
    {
        q: "How do I get started with K3 Media?",
        a: "Simply reach out via our Contact page or call us directly. We'll schedule a free 30-minute consultation to understand your goals and recommend the right service package for your business — no obligation."
    }
]

const FaqInner = () => {
    const [query, setQuery] = useState('')

    const filterFaqs = (items) =>
        query.trim() === ''
            ? items
            : items.filter(
                item =>
                    item.q.toLowerCase().includes(query.toLowerCase()) ||
                    item.a.toLowerCase().includes(query.toLowerCase())
            )

    const filteredLeft = filterFaqs(leftFaqs)
    const filteredRight = filterFaqs(rightFaqs)
    const noResults = filteredLeft.length === 0 && filteredRight.length === 0

    return (
        <>
            <section className="faqs-section pt-100 pb-100">
                <div className="auto-container">

                    {/* Search Bar */}
                    <div style={{ maxWidth: '560px', margin: '0 auto 50px', position: 'relative' }}>
                        <input
                            type="text"
                            placeholder="Search frequently asked questions…"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '14px 50px 14px 20px',
                                border: '2px solid #e6e8ed',
                                borderRadius: '6px',
                                fontSize: '15px',
                                outline: 'none',
                                color: '#333',
                                fontFamily: 'inherit'
                            }}
                        />
                        <i className="fa fa-search" style={{
                            position: 'absolute',
                            right: '18px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#e9a233',
                            fontSize: '16px'
                        }} />
                    </div>

                    {noResults ? (
                        <p style={{ textAlign: 'center', color: '#888', fontSize: '16px', padding: '40px 0' }}>
                            No results found for "<strong>{query}</strong>". Try a different keyword.
                        </p>
                    ) : (
                        <div className="row">
                            <div className="form-column col-lg-6 col-md-12 col-sm-12">
                                {filteredLeft.length > 0 && <AccordionFAQ items={filteredLeft} />}
                            </div>
                            <div className="form-column col-lg-6 col-md-12 col-sm-12">
                                {filteredRight.length > 0 && <AccordionFAQ items={filteredRight} />}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default FaqInner
