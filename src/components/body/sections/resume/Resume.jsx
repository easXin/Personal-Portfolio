import React from 'react'
import '../../css/resume.css'
export default function ResumeComponet() {
  return (
     <div className="resume">
        <section id="cd-timeline" class="cd-container">
      <div class="cd-timeline-block">
        <div class="cd-timeline-img cd-picture">
        </div>

        <div class="cd-timeline-content">
          <h2>Wiley Edge onsite JP Morgan</h2>
          <div class="timeline-content-info">
            <span class="timeline-content-info-title">
              <i class="fa fa-certificate" aria-hidden="true"></i>
              Software Engineer
            </span>
            <span class="timeline-content-info-date">
              <i class="fa fa-calendar-o" aria-hidden="true"></i>
              June 2016 - Present
            </span>
          </div>
          <p>Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.</p>
          <ul class="content-skills">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Wordpress</li>
          </ul>
        </div> 
      </div> 

      <div class="cd-timeline-block">
        <div class="cd-timeline-img cd-picture">
        </div> 
        <div class="cd-timeline-content">
          <h2>Forge</h2>
          <div class="timeline-content-info">
              <span class="timeline-content-info-title">
                <i class="fa fa-certificate" aria-hidden="true"></i>
                SWE Virtual Inten at JP Morgan
              </span>
              <span class="timeline-content-info-date">
                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                07/2020 - 08/2020
              </span>
            </div>
        </div> 
      </div> 

      <div class="cd-timeline-block">
        <div class="cd-timeline-img cd-movie">
        </div> 
        <div class="cd-timeline-content">
          <h2>Professor Jesse Hartloff, University at Buffalo</h2>
          <div class="timeline-content-info">
              <span class="timeline-content-info-title">
                <i class="fa fa-certificate" aria-hidden="true"></i>
                IoT Research Assistant
              </span>
              <span class="timeline-content-info-date">
                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                05/2019 - 08/2019
              </span>
          </div>
        </div> 
      </div>

      <div class="cd-timeline-block">
        <div class="cd-timeline-img cd-picture">
        </div> 
        <div class="cd-timeline-content">
          <h2>UB Center for the Art</h2>
          <div class="timeline-content-info">
              <span class="timeline-content-info-title">
                <i class="fa fa-certificate" aria-hidden="true"></i>
                Lab Monitor
              </span>
              <span class="timeline-content-info-date">
                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                03/2016 - 12/2019
              </span>
            </div>
        </div> 
      </div> 

        <div class="cd-timeline-block">
          <div class="cd-timeline-img cd-movie"/>
          <div class="cd-timeline-content">
            <h2>University at Buffalo</h2>
            <div class="timeline-content-info">
              <span class="timeline-content-info-title">
                <i class="fa fa-certificate" aria-hidden="true"></i>
                CSE Undergrad
              </span>
              <span class="timeline-content-info-date">
                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                08/2016 - 02/2020
              </span>
              <p>
                <ul>   
                  <li>Member of UB Asian American Student Union </li>
                  <li>Top 10 Hackethon Winning Team</li>
                  <li>Member of UB ACM</li>
                  <li>Honor Student</li>
                </ul>
              </p>
              <ul class="content-skills">
                <li>Data Structure</li>
                <li>Software Engineering Principle</li>
                <li>Java</li>
                <li>C++</li>
              </ul>
            </div> 
          </div>
        </div> 
      </section> 
    </div>
  )
}
