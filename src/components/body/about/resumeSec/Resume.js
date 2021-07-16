import React from 'react'
import EduWorInfo from './EduWorInfo'
import PersonalInfo from './PersonalInfo'
import './Resume.css'
function Resume() {
    return (
        <div id="resume">
            <div className="resume__title titleFont">
                <h2>Resume</h2>
                <hr />
                <p className="pFont">
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                    ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                    ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                </p>
            </div>
            <div className="resume__detail">
                <div className="resume__detailLeft">
                    <PersonalInfo secType={"Summary"} name={"Eric Wang"}
                        description={`Magnam dolores commodi suscipit. Necessitatibus eius consequaturex aliquid fuga eum quidem fuga eum quidemfuga eum quidemfuga eum quidemfuga eum quidem.`} />

                    <EduWorInfo secType={"Education"} title={"Bachelor of Science in Computer Science"}
                        duration={"08/2016 - 12/2019"} location={"University at Buffalo, Buffalo, NY"}
                        description={"Magnam dolores commodi suscipit. Necessitatibus eius consequaturex aliquid fuga eum quidem."} />

                    <EduWorInfo secType={"Acheivement"} title={"43North Hackathon Competition"}
                        duration={"08/2019"} location={"43North, Buffalo, NY"}
                        description={"Top 10 winner at Buffalo 43North Hackathon "} />
                </div>
                <div className="resume__detailRight">
                    <EduWorInfo secType={"Working Experience"}
                        title={"Software Engineer Virtual Intern"}
                        duration={"06/2020 - 07/2020"}
                        location={"JP Morgan Chase & Co, Remote"}
                        description={"Magnam dolores commodi suscipit. Necessitatibus eius consequaturex aliquid fuga eum quidem."} />
                    <EduWorInfo title={"Software Engineer Intern"}
                        duration={"08/2019 - 12/2019"} location={"UB, Buffalo, New York"}
                        description={"Magnam dolores commodi suscipit. Necessitatibus eius consequaturex aliquid fuga eum quidem."} />
                    <EduWorInfo title={"Software Engineer Intern"}
                        duration={"05/2019 - 08/2019"} location={"UB SMART Automation Sandbox, Buffalo, New York"}
                        description={"Magnam dolores commodi suscipit. Necessitatibus eius consequaturex aliquid fuga eum quidem."} />
                </div>
            </div>
        </div>
    )
}

export default Resume
