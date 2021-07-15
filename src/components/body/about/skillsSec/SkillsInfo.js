import React from 'react'
import ProgressBar from './ProgressBar'
import './SkillsInfo.css'
function SkillsInfo({ skill, percentage }) {
    return (
        <div className="skillsInfo">
            <div className="skillsInfo__top">
                <p>{skill}</p>
                <p>{percentage}%</p>
            </div>
            <div className="skillsInfo__buttom">
                <ProgressBar bgColor={"#149ddd"} completed={percentage} />
            </div>


        </div>
    )
}

export default SkillsInfo
