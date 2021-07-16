import React from 'react'
import './PersonalInfo.css'

function PersonalInfo({ secType, name, description }) {
    return (
        <div className="personalInfo">
            <h2>{secType}</h2>

            <div className="styleThisBlock">
                <div className="vl" />
                <div className="personalInfo__detail">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo


