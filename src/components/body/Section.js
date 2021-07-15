import React from 'react'
import Profile from './about/Profile'
import Intro from './about/Intro'
import Skills from './about/Skills'
import Resume from './about/Resume'
import Projects from './about/Projects'
import Contact from './about/Contact'
import './Section.css'

function Section() {
    return (
        <div className="section">
            <Profile />
            <Intro />
            <Skills />
            <Resume />
            <Projects />
            <Contact />
        </div>
    )
}

export default Section
