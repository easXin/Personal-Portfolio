import React from 'react'
import '../../css/about.css'
import myPic from '../../../../img/pic.jpg'

export default function AboutComponent() {
  return (
    <div className="about">
      <div className="about_left">
        <h1>So, who am I?</h1>
        <p>
           Hey, welcome to my page, I am Eric, I am from New York, but now based in Texas, I am a software engineer with roughly 2 YOE. I held a Bachelor degree from State university of New York at Buffalo in Computer Science. Was employed by JP Morgan previously, but now I am a freelancer. I am an easy going guy, outside of work, I like to travel around, play sport, and go fishing whenever the time is right. I believe life is life, work is work, if you let work drive you crazy, you are going to be way away from being productivity, just take a deep breath, save sometime for your family. Enjoy
        </p>
      

      </div>
      <div className="about_right">
        <img src={myPic} alt="my_pic" className='my_pic'/>
      </div>
    </div>

  )
}
