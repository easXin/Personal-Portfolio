import React from 'react'
import IntroInfo from './IntroInfo'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './Intro.css'

function Intro({ name }) {
    const personalInfo={
        "name": name,
        "age": 26,
        "website": "easxin.github.io",
        "degree": "Bachelor",
        "phone": "(347)-399-3665",
        "email": "eric.xinw1@gmail.com",
        "location": "New York, USA",
        "opening": "Available"
    }
    const imgPath="./images/profile.jpg"
    const introPara = "Hi there! Thank you to visit my personal website. I am Dengxin, also goes by name of Eric, I graduated from Buffalo University in Dec 2019, with a Bachelor of Science degree in Computer Science. During my spare time, I enjoy to traveling around, I like to use the camera to record down the beautiful scenery I have seen, currently I have been to Florida, Toronto, Pennsylvania, and some other places, but New York remains my favorite, because I am a New Yorker and I like the city I live in."
    const bodyPara = "I spent most my time at backend development, but I like React, which makes me a web developer"

    return (
        <div id="intro">
            <div className="intro__title titleFont">
                <h2>About</h2>
                <hr />
                <p className="pFont">
                    {introPara}
                </p>
            </div>

            <div className="intro__detail">
                <div className="flex-child intro__detailLeft">
                    <img src={imgPath} alt="personal avatar" />
                </div>
                <div className="flex-child intro__detailRight pFont">
                    <h3 className="titleFont">Backend Developer &amp; Web Developer. </h3>
                    <p>
                        {bodyPara}
                    </p>
                    <div className="intro__detailRightInfo">
                        <IntroInfo className="intro__left" Icon={ChevronRightIcon} title={"Name"} data={personalInfo.name} />
                        <IntroInfo Icon={ChevronRightIcon} title={"Email"} data={personalInfo.email} />
                    </div>

                    <div className="intro__detailRightInfo">
                        <IntroInfo Icon={ChevronRightIcon} title={"Website"} data={personalInfo.website} />
                        <IntroInfo Icon={ChevronRightIcon} title={"Degree"} data={personalInfo.degree} />
                    </div>
                    <div className="intro__detailRightInfo">
                        <IntroInfo Icon={ChevronRightIcon} title={"Phone"} data={personalInfo.phone} />
                        <IntroInfo Icon={ChevronRightIcon} title={"City"} data={personalInfo.location} />
                    </div>
                    <div className="intro__detailRightInfo">
                        <IntroInfo Icon={ChevronRightIcon} title={"Opening"} data={personalInfo.opening} />
                    </div>
                    <br />

                </div>
            </div>
        </div>
    )
}

export default Intro
