import React from 'react'
import Profile from './about/profileSec/Profile'
import Intro from './about/introSec/Intro'
import Skills from './about/skillsSec/Skills'
import Resume from './about/resumeSec/Resume'
import Projects from './about/projectsSec/Projects'
import Contact from './about/contactSec/Contact'
import './Section.css'
function Section() {
    const name = "Eric Wang"

    return (
        <div className="section">
            <Profile name={name} />
            <Intro name={name} />
            <Skills />
            <Resume name={name} />
            <Projects />
            <Contact />
        </div>
    )
}

export default Section
