import React from 'react'
import { Box } from '@mui/system'
import { Typography, TextField, Link, Button, MenuItem  } from '@mui/material'
import styled from '@emotion/styled';
import { useState } from 'react';

const StyledInputBox =styled(Box)`
  display: flex;
  flex-direction:column;
  width:60%;
  height:100%;
`

const StyledRegisterButton =styled(Button)`
  margin-bottom: 30px;
  font-size: 18px;
`

const sexOptions = [
  {
    value: 'Male',
  },
  {
    value: 'Female',
  },
  {
    value: 'Other',
  }
]


const RegisterForm = () => {
  const [ sex, setSex] = useState();

  return (
   <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}>
      <Box sx={{ width: '40%', height: '70%', border: '2px solid black', borderRadius: '10px', display:'flex', justifyContent:'flex-start', alignItems:'center', flexDirection:'column' }}>
        <Button sx={{position: 'absolute', right: '32%', marginTop:'10px'}}>
          <Link href="/" sx={{textDecoration: 'none'}} >Cancel</Link>
        </Button>
        
        <Typography variant='h3' sx={{marginTop: '40px'}}>Register new Account</Typography>
        <StyledInputBox>
           <TextField sx={{marginTop:'20px'}}
              required
              id="standard-required"
              label="Name"
              variant="standard"
            />
              <TextField sx={{marginTop:'20px'}}
              required
              id="standard-required"
              label="Surname"
              variant="standard"
            />
              <TextField sx={{marginTop:'20px'}}
              type='number'
              required
              id="standard-required"
              label="Age"
              variant="standard"
            />
            <TextField sx={{marginTop:'20px'}}
              id="filled-select-currency"
              select
              label="Select your sex"
              value={sex}
              onChange={e => setSex(e.target.value)}
              variant="standard"
            >
          {sexOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
          <TextField sx={{marginTop:'20px'}}
              fullWidth
              required
              id="standard-password-input"
              label="Create password"
              type="password"
              variant="standard"
            />
              <TextField sx={{marginTop:'20px'}}
              fullWidth
              required
              id="standard-password-input"
              label="Repeat password"
              type="password"
              variant="standard"
            />
        </StyledInputBox>
        <StyledRegisterButton>Register</StyledRegisterButton>
      </Box>
    </Box>
  )
}

export default RegisterForm