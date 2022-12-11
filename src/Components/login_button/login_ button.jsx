import React from 'react'
import { Box } from '@mui/system'
import { Button } from '@mui/material'


const LoginButton = () => {
  return (
    <Box sx={{marginTop:'40px'}}>
      <Button variant="outlined" size="large">Login</Button>
    </Box>
  )
}

export default LoginButton