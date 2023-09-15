import React from 'react'
import '../../css/home.css'
export default function HomeComponent() {
  return (
    <div className="intro">
      <h1 className="intro__hello">Hello!
      </h1>

      <h2 className="intro__tagline">I'm &nbsp;
        <span className="name">Eric Wang</span>, a software engineer with a primary focus on backend development,
           and I also specialize in creating React SPA and managing databases.
     
      </h2>

      <h3 className="intro__contact">
        <span>Get in touch </span>
        <span className="highlight-link">
          <a href="mailto:eric.xinw1@gmail.com" target="_blank" className='underline-animation' >eric.xinw1@gmail.com</a>
        </span>
      </h3>
    </div>

  )
}
