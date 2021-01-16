import React from 'react'
import './Section.css'

function Section({ title, subtitle, works, dark, id }) {
    return (
        <div className={"section" + (dark ? "-dark" : "")}>
            <div className="section-content" id={id}>
                <div className="section-info">
                    <h1 className="pretitle">I am a</h1>
                    <h1 className="title">{title}</h1>
                    {subtitle}
                </div>
                <div className="section-works">
                    {works}
                </div>
            </div>
        </div>
    )
}

export default Section
