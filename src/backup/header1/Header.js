import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import HeaderOptions from './HeaderOptions';
import './Header.css'
import { Icon } from '@iconify/react';
import bxlFacebook from '@iconify-icons/bx/bxl-facebook';
import bxlSlack from '@iconify-icons/bx/bxl-slack';
import bxlInstagram from '@iconify-icons/bx/bxl-instagram';
import bxlLinkedin from '@iconify-icons/bx/bxl-linkedin';
import bxGitBranch from '@iconify-icons/bx/bx-git-branch';
import { v4 as uuidv4 } from 'uuid';
function Header({ name }) {


    const imgPath = "./images/pic2.jpg"
    const iconData = [
        {
            "url": "https://www.facebook.com/ericwon95/",
            "icon": bxlFacebook
        },
        {
            "url": "https://sandbox-101.slack.com/join/shared_invite/zt-sz6u1wk7-K_2o5UbmmcNS20jdjx52eA#/shared-invite/email",
            "icon": bxlSlack
        },
        {
            "url": "https://www.instagram.com/stillthinking___/",
            "icon": bxlInstagram
        },
        {
            "url": "https://www.linkedin.com/in/ericxin/",
            "icon": bxlLinkedin
        },
        {
            "url": "https://github.com/easXin",
            "icon": bxGitBranch
        }
    ]
    const socialMedia = iconData.map((data) => {
        return (
            <IconButton key={uuidv4()}>
                <a href={data.url}>
                    <Icon icon={data.icon} />
                </a>
            </IconButton>
        );
    });
    const options = [
        {
            "icon": HomeIcon,
            "title": "Home",
            "posAnchor": "#profile"
        },
        {
            "icon": PersonIcon,
            "title": "About",
            "posAnchor": "#intro"
        },
        {
            "icon": AssignmentIcon,
            "title": "Resume",
            "posAnchor": "#resume"
        }, {
            "icon": ChromeReaderModeIcon,
            "title": "Project",
            "posAnchor": "#projects"
        }, {
            "icon": EmailIcon,
            "title": "Contact",
            "posAnchor": "#contact"
        }
    ]

    const headerOption = options.map((data) => {
        return (
            <a href={data.posAnchor} key={uuidv4()}>
                <HeaderOptions Icon={data.icon} title={data.title} />
            </a>
        )
    })



    return (
        <div className="header">
            <div className="header__profile" >
                <Avatar src={String(imgPath)} title="chilling" />
                <h1>
                    {name}
                </h1>
                <div className="header__icons">
                    {socialMedia}
                </div>
            </div>
            <div className="header__options">
                {headerOption}
            </div>

            <div className="header__footer">

                <div className="header__copyrights">
                    &copy; 2021 {name}
                </div>
            </div>
        </div>
    )
}

export default Header
