import React from 'react'
import SkillsInfo from './SkillsInfo'

import './Skills.css'
function Skills() {
    return (
        // // titleFont rale  pFont open    bFont   pop
        <div className="skills">
            <div className="skills__title titleFont">
                <h2>Skills</h2>
                <hr />
                <p className="pFont">
                    My Programming Language Proficiency
                </p>
            </div>
            <div className="skills__detail">
                <div className="skills__detailInfo">
                    <SkillsInfo skill={"Java"} percentage={"90"} />
                    <SkillsInfo skill={"JavaScript"} percentage={"80"} />
                </div>
                <div className="skills__detailInfo">
                    <SkillsInfo skill={"React"} percentage={"80"} />
                    <SkillsInfo skill={"Rest API"} percentage={"75"} />
                </div>
                <div className="skills__detailInfo">
                    <SkillsInfo skill={"SpringBoot"} percentage={"80"} />
                    <SkillsInfo skill={"MongoDB"} percentage={"75"} />
                </div>
                <div className="skills__detailInfo">
                    <SkillsInfo skill={"SQL"} percentage={"75"} />
                    <SkillsInfo skill={"Firebase"} percentage={"55"} />
                </div>
            </div>
        </div>
    )
}

export default Skills
