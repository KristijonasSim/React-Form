import React from 'react'
import { Box } from '@mui/system'
import { Button } from '@mui/material'


const LoginButton = () => {
  return (
    <Box sx={{marginTop:'40px'}}>
      <Button variant="outlined" type='submit' size="large">Login</Button>
    </Box>
  )
}

export default LoginButton