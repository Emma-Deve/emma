import React from 'react'
import { Box, Typography } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import GetAppIcon from '@material-ui/icons/GetApp'

import './SideBar.scss'
import MyTimeLineItem, {
  MyTimeLineHeader,
} from '../../components/MyTimeLine/MyTimeLine'
import MyButton from '../../components/MyButton/MyButton'

function SideBar({ sideBar, avatar, CVHref }) {
  return (
    <Box component="div" className="portrait container_shadow">
      <div className="portrait_name">
        <Typography className="name">{sideBar.name}</Typography>
        <Typography className="title">{sideBar.title}</Typography>
      </div>
      <img className="portrait_img" src={avatar} alt={sideBar.name} />
      <div className="timeline">
        <MyTimeLineHeader icon={<PersonIcon />} title={''} text={''} />
        {Object.keys(sideBar).map((key, index) => (
          <MyTimeLineItem
            key={index}
            isLastItem={
              index === Object.keys(sideBar).length - 1 ? true : false
            }
            title={
              <Typography className="item_text">
                <Typography className="item_title">{key}:</Typography>
                {sideBar[key]}
              </Typography>
            }
          />
        ))}
      </div>
      <div className="portrait_button">
        <MyButton icon={<GetAppIcon />} text="Download Cv" href={CVHref} />
      </div>
    </Box>
  )
}
export default SideBar
