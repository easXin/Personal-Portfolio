import React from 'react'
import './IntroInfo.css'
function IntroInfo({ Icon, title, data }) {
    return (
        <div className="introInfo">
            <Icon />
            <h3>{title}: </h3>
            <p>{data}</p>
        </div>
    )
}

export default IntroInfo
