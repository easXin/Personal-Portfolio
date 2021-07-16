import React from 'react'
import IntroInfo from './IntroInfo'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './Intro.css'
// titleFont rale  pFont open    bFont   pop
function Intro() {
    return (
        <div id="intro">
            <div className="intro__title titleFont">
                <h2>About</h2>
                <hr />
                <p className="pFont">
                    Hi there! I am Dengxin, also goes by name of Eric, I graduated
                    from Buffalo University in Dec 2019, with a Bachelor of Science
                    degree in Computer Science, Here is a little bit information about myself
                </p>
            </div>

            <div className="intro__detail">
                <div className="intro__detailLeft">
                    <img src="doggy.JPG" alt="personal avatar" />
                </div>
                <div className="intro__detailRight pFont">
                    <h3 className="titleFont">Backend Developer &amp; Web Developer. </h3>
                    <p>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                        ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                    </p>
                    <div className="intro__detailRightInfo">
                        <IntroInfo className="intro__left" Icon={ChevronRightIcon} title={"Name"} data={"Eric Wang"} />
                        <IntroInfo className="intro__right" Icon={ChevronRightIcon} title={"Age"} data={26} />
                    </div>

                    <div className="intro__detailRightInfo">
                        <IntroInfo Icon={ChevronRightIcon} title={"Website"} data={"easxin.github.io"} />
                        <IntroInfo Icon={ChevronRightIcon} title={"Degree"} data={"Bachelor "} />
                    </div>
                    <div className="intro__detailRightInfo">
                        <IntroInfo Icon={ChevronRightIcon} title={"Phone"} data={"(347)-399-3665"} />
                        <IntroInfo Icon={ChevronRightIcon} title={"Email"} data={"eric.xinw1@gmail.com"} />
                    </div>
                    <div className="intro__detailRightInfo">
                        <IntroInfo Icon={ChevronRightIcon} title={"City"} data={"New York, USA"} />
                        <IntroInfo Icon={ChevronRightIcon} title={"Freelance"} data={"Available"} />
                    </div>
                    <br />
                    <p>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                        ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                        ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                        ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Intro
