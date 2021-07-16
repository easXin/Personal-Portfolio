import React from 'react'
import Profile from './about/profileSec/Profile'
import Intro from './about/introSec/Intro'
import Skills from './about/skillsSec/Skills'
import Resume from './about/resumeSec/Resume'
import Projects from './about/projectsSec/Projects'
import Contact from './about/contactSec/Contact'
import Gallery from './about/gallery/Gallery'
import './Section.css'
function Section() {
    return (
        <div className="section">
            <Profile />
            <Intro />
            <Skills />
            <Resume />
            <Projects />
            <Gallery />
            <Contact />
        </div>
    )
}

export default Section
