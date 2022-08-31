import React, { useEffect, useState } from 'react'
import { Box, Grid, TextField, Typography } from '@material-ui/core'
import './Contact.scss'
import MyButton from '../../components/MyButton/MyButton'
import ContactMailSharpIcon from '@material-ui/icons/ContactMailSharp'
import MyTitle from '../../components/MyTitle/MyTitle'
import SocialLink from '../../components/SocialLink/SocialLink'
import { reqInformation } from '../../api'
import Loading from '../../components/Loading/Loading'

function Contact() {
  const [information, setInformation] = useState(null)

  useEffect(() => {
    getInformation()
  }, [])

  const getInformation = async () => {
    const resInformation = await reqInformation()
    setInformation(resInformation)
  }

  return information ? (
    <Grid container className="contact" justify="space-between">
      {/* Contact Form */}
      <Grid item container xs={12} sm={6} spacing={4} className="form">
        <Grid item xs={12} className="title">
          <MyTitle title="contact form" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth name="name" label="Name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth name="email" label="Email" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth name="message" label="Message" rows={3} />
        </Grid>
        <Grid item xs={12} className="button">
          <MyButton
            text="Contact"
            icon={<ContactMailSharpIcon />}
            href="mailto:limeng19917@gmail.com"
          />
        </Grid>
      </Grid>

      {/* Contact Information */}
      <Grid item container xs={12} sm={6} spacing={1} className="information">
        <Grid item xs={12} className="title">
          <MyTitle title="contact information" />
        </Grid>
        <Grid item xs={12}>
          {
            <Box component="div">
              <Typography className="item">
                <Typography className="item_title">Address: </Typography>
                {information.sideBar.address}
              </Typography>
              <Typography className="item">
                <Typography className="item_title">Phone: </Typography>
                {information.sideBar.phone}
              </Typography>
              <Typography className="item">
                <Typography className="item_title">Job: </Typography>
                {information.sideBar.title}
              </Typography>
              <Typography className="item">
                <Typography className="item_title">E-mail: </Typography>
                {information.sideBar.email}
              </Typography>
              <SocialLink socials={information.socials} />
            </Box>
          }
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Loading />
  )
}
export default Contact
