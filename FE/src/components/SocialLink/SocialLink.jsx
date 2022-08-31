import React from 'react'
import { Link } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import './SocialLink.scss'

function SocialLink({ socials }) {
  const icons = {
    MyGitHub: <GitHubIcon />,
    MyLinkedIn: <LinkedInIcon />,
  }
  console.log(socials)
  return (
    <div className="icons d-inline-block d-md-none d-xl-inline-block">
      {Object.keys(socials).map((key, index) => (
        <Link key={index} className="icon" href={socials[key].link}>
          {icons[socials[key].text]}
        </Link>
      ))}
    </div>
  )
}
export default SocialLink
