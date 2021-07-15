import React from 'react'
import IntroInfo from './IntroInfo'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './Intro.css'
function Intro() {
    return (
        <div className="intro">
            <div className="intro__title">
                <h2>About</h2>
                <hr />
                <p>
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                    ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                    quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                    Quia fugiat sit in iste officiis commodi quidem hic quas.
                </p>
            </div>

            <div className="intro__detail">
                <div className="intro__detailLeft">
                    <img src="doggy.JPG" alt="personal avatar" />
                </div>
                <div className="intro__detailRight">
                    <h3>Backend Developer &amp; Web Developer. </h3>
                    <p>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                        ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                    </p>
                    <div className="intro__detailRightInfo">
                        <IntroInfo className="intro__left" Icon={ChevronRightIcon} title={"Name"} data={"Eric Wang"} />
                        <IntroInfo className="intro__right" Icon={ChevronRightIcon} title={"Age"} data={26} />
                    </div>

                    <div className="intro__detailRightInfo">
                        <IntroInfo className="intro__half" Icon={ChevronRightIcon} title={"Website"} data={"easxin.github.io"} />
                        <IntroInfo className="intro__half" Icon={ChevronRightIcon} title={"Degree"} data={"BS at Computer Science"} />
                    </div>
                    <div className="intro__detailRightInfo">
                        <IntroInfo className="intro__half" Icon={ChevronRightIcon} title={"Phone"} data={"(347)-399-3665"} />
                        <IntroInfo className="intro__half" Icon={ChevronRightIcon} title={"Email"} data={"eric.xinw1@gmail.com"} />
                    </div>
                    <div className="intro__detailRightInfo">
                        <IntroInfo className="intro__half" Icon={ChevronRightIcon} title={"City"} data={"New York, USA"} />
                        <IntroInfo className="intro__half" Icon={ChevronRightIcon} title={"Freelance"} data={"Available"} />
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
