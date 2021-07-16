import React from 'react'
import './EduWorInfo.css'

function EduWorInfo({ secType, title, duration, location, description }) {
    return (
        <div className="eduWorInfo">
            {secType ? <h2>{secType}</h2> : ""}
            <div className="styleThisPart">
                <div className={`${secType ? "" : "act"}`} />
                <div className="vl" />


                <div className="eduWorInfo__detail">
                    <h3>{title}</h3>
                    <h4>{duration}</h4>
                    <h5>{location}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default EduWorInfo

