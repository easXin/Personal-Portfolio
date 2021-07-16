import React from 'react'
import './EduWorInfo.css'


function EduWorInfo({ secType, title, duration, location, description }) {
    return (
        <div className="eduWorInfo">
            {secType ? <h2 className="titleFont">{secType}</h2> : ""}
            <div className="styleThisPart">
                <div className={`${secType ? "" : "act"}`} />
                <div className="vl" />


                <div className="eduWorInfo__detail">
                    <h3 className="bFont">{title}</h3>
                    <h4 className="titleFont">{duration}</h4>
                    <h5 className="pFont">{location}</h5>
                    <p className="pFont">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default EduWorInfo

