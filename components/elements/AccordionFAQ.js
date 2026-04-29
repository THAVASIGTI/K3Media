import React, { useState } from 'react'

const AccordionFAQ = ({ items }) => {
    const [activeKey, setActiveKey] = useState(1)

    const handleToggle = (key) => {
        setActiveKey(prev => prev === key ? null : key)
    }

    return (
        <ul className="accordion-box wow fadeInRight">
            {items.map((item, i) => {
                const key = i + 1
                const isOpen = activeKey === key
                return (
                    <li
                        key={i}
                        className={`accordion block ${isOpen ? 'active-block' : ''}`}
                        onClick={() => handleToggle(key)}
                    >
                        <div className={`acc-btn ${isOpen ? 'active' : ''}`}>
                            {item.q}
                            <div className="icon fa fa-plus" />
                        </div>
                        <div className={`acc-content ${isOpen ? 'current' : ''}`}>
                            <div className="content">
                                <div className="text">{item.a}</div>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default AccordionFAQ
