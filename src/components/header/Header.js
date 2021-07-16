import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import HeaderOptions from './HeaderOptions';
import './Header.css'
import { Icon } from '@iconify/react';
import bxlTwitter from '@iconify-icons/bx/bxl-twitter';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import EmailIcon from '@material-ui/icons/Email';

function Header() {
    return (
        <div className="header">
            <div className="header__profile">
                <Avatar src="logo192.png" />
                <h1>
                    <a href="index.html">Eric Wang</a>
                </h1>
                {/* facebook, gmail, instagram, linkedIn, gitHub */}
                <div className="header__icons">
                    <IconButton>
                        <Icon icon={bxlTwitter} />
                    </IconButton>
                    <IconButton>
                        <Icon icon={bxlTwitter} />
                    </IconButton>
                    <IconButton>
                        <Icon icon={bxlTwitter} />
                    </IconButton>
                    <IconButton>
                        <Icon icon={bxlTwitter} />
                    </IconButton>
                    <IconButton>
                        <Icon icon={bxlTwitter} />
                    </IconButton>
                </div>
            </div>
            <div className="header__options">
                <a href="#profile">
                    <HeaderOptions Icon={HomeIcon} title="Home" />
                </a>
                <a href="#intro">
                    <HeaderOptions Icon={PersonIcon} title="About" />
                </a>
                <a href="#resume">
                    <HeaderOptions Icon={AssignmentIcon} title="Resume" />
                </a>
                <a href="#projects">
                    <HeaderOptions Icon={ChromeReaderModeIcon} title="Project" />
                </a>
                <a href="#contact">
                    <HeaderOptions Icon={EmailIcon} title="Contact" />
                </a>





            </div>
            <div className="header__footer">
                <div className="header__copyrights">
                    &copy; 2021 Eric Wang
                </div>
            </div>
        </div>
    )
}

export default Header
