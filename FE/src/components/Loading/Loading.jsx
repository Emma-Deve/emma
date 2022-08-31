import React from 'react'
import { Box, CircularProgress } from '@material-ui/core'
import './Loading.scss'

function Loading() {
  return (
    <Box className="loading">
      <CircularProgress color="inherit" />
    </Box>
  )
}

export default Loading
