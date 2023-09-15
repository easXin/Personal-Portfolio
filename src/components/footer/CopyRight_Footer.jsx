import React from 'react'

import { IconButton } from '@mui/material';
import '../css/footer.css'
import bxlFacebook from '@iconify-icons/bx/bxl-facebook';
import bxlSlack from '@iconify-icons/bx/bxl-slack';
import bxlInstagram from '@iconify-icons/bx/bxl-instagram';
import bxlLinkedin from '@iconify-icons/bx/bxl-linkedin';
import bxGitBranch from '@iconify-icons/bx/bx-git-branch';
import { v4 as uuidv4 } from 'uuid';
import { Icon } from '@iconify/react';

export default function FooterComponent() {
  const iconData = [
    {
        "url": "https://www.facebook.com/ericwon95/",
        "icon": bxlFacebook
    },
    {
        "url": "https://www.instagram.com/xineas3698/",
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

  return (
    <footer className='footer'>
      <p className='header__icons'> {socialMedia}</p>
      {/* <p className='copyrights'>&copy; {new Date().getFullYear()} Dengxin</p>   */}
    </footer>
  )
}
