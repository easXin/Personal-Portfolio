import React from 'react'
import '../../css/error.css'
import confuseGif from './dog-confused.gif'
export default function ErrorComponent() {
  
  return (
    <div id="main">
        <div class="fof">
              <h1>Oops!! Error 404</h1>
              <p>Your internet is fine, but I can't find what you are look for</p>
              <img className='confuse' src={confuseGif} alt="Description of the GIF"></img>
              <p>Emm, so what are you looking for </p> 
              <div>
              <span className="highlight-link">
                <a href="/contact" className='underline-animation' >Leave a Message</a>
              </span> or &nbsp;
                <span className="highlight-link">
                  <a href="/portfolio" className='underline-animation' >Go Back</a>
                </span>
              </div>
        </div>
    </div>
  )
}


