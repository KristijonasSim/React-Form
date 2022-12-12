import React from 'react'
import { Box } from '@mui/system'
import { Typography, TextField, Link, Button, MenuItem  } from '@mui/material'
import styled from '@emotion/styled';
import { useState } from 'react';
import {  useFormik } from 'formik';
import * as Yup from 'yup';


const StyledInputBox =styled(Box)`
  display: flex;
  flex-direction:column;
  width:60%;
  height:100%;
`

const StyledRegisterButton =styled(Button)`
  margin-top: 30px;
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

  const formik = useFormik({
    initialValues: {
      name:'',
      surname:'',
      age:'',
      sex:'',
      email:'',
      password:'',
      passwordRepeat:''
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: Yup.object({
        name:Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        surname:Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        age:Yup.number()
          .min(18, 'You must be at least 18 years old')
          .required('Required'),
        sex:Yup.string()
          .required('Required'),
        email:Yup.string()
          .email('Invalid email adress')
          .required('Required'),
        password: Yup.string()
          .required('No password provided.') 
          .min(8, 'Password is too short - should be 8 chars minimum.'),
        passwordRepeat: Yup.string().label('confirm password').required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }),

    onSubmit: values => {
      alert(JSON.stringify( values, null, 2 ));
    },
  })

  console.log(formik)

  return (
   <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}>
      <Box sx={{ width: '40%', height: '80%', border: '2px solid black', borderRadius: '10px', display:'flex', justifyContent:'flex-start', alignItems:'center', flexDirection:'column' }}>
        <Button sx={{position: 'absolute', right: '32%', marginTop:'10px'}}>
          <Link href="/" sx={{textDecoration: 'none'}} >Cancel</Link>
        </Button>
        
        <Typography variant='h3' sx={{marginTop: '40px'}}>Register new Account</Typography>
         <StyledInputBox component="form" onSubmit={formik.handleSubmit}>
           <TextField sx={{marginTop:'20px'}}
              id="name"
              error={!!formik.errors?.name && formik.touched.name}
              name="name"
              label="Name"
              type='text'
              variant="standard"
              helperText={formik.errors?.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
              <TextField sx={{marginTop:'20px'}}
              id="surname"
              error = {!!formik.errors?.surname}
              name="surname"
              label="Surname"
              type='text'
              variant="standard"
              helperText={formik.errors?.surname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.surname}
            />
              <TextField sx={{marginTop:'20px'}}
              type='number'
              error = {!!formik.errors?.age}
              name="age"
              id="age"
              label="Age"
              variant="standard"
              helperText={formik.errors?.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
            />
            <TextField sx={{marginTop:'20px'}}
              id="sex"
              name='sex'
              error = {!!formik.errors?.sex}
              select
              label="Select your sex"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant="standard"
              helperText={formik.errors?.sex}
              value={formik.values.sex}
            >
          {sexOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
              <TextField sx={{marginTop:'20px'}}
              error = {!!formik.errors?.email}
              id="email"
              name="email"
              label="Email"
              type='email'
              variant="standard"
              helperText={formik.errors?.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          <TextField sx={{marginTop:'20px'}}
              error = {!!formik.errors?.password}
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="standard"
              helperText={formik.errors?.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
              <TextField sx={{marginTop:'20px'}}
              error = {!!formik.errors?.passwordRepeat}
              id="passwordRepeat"
              name="passwordRepeat"
              label="Password"
              type="password"
              variant="standard"
              helperText={formik.errors?.passwordRepeat}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.passwordRepeat}
            />
            <StyledRegisterButton type='submit'>Register</StyledRegisterButton>
        </StyledInputBox>
      </Box>
    </Box>
  )
}

export default RegisterForm