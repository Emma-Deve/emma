import React from 'react'
import SendIcon from '@material-ui/icons/Send'

import './Header.scss'
import MyButton from '../../components/MyButton/MyButton'
import SocialLink from '../../components/SocialLink/SocialLink'
import HeaderLeftNav from '../../components/HeaderLeftNav/HeaderLeftNav'

function Header({ socials }) {
  return (
    <div className="header">
      <HeaderLeftNav />
      <div className="header_right">
        <SocialLink socials={socials} />
        <MyButton
          text="hire me"
          icon={<SendIcon />}
          href="mailto:limeng19917@gmail.com"
        />
      </div>
    </div>
  )
}
export default Header
