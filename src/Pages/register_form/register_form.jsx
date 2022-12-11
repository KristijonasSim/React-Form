import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const RegisterFrom = () => {
  return (
   <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}>
      <Box sx={{ width: '50%', height: '65%', border: '2px solid black', borderRadius: '10px', display:'flex', justifyContent:'flex-start', alignItems:'center', flexDirection:'column' }}> 
        <Typography variant='h4'>Register new Account</Typography>
      </Box>
    </Box>
  )
}

export default RegisterFrom