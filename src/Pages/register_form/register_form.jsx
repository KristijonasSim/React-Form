import React from 'react'
import { Box } from '@mui/system'
import { Typography, TextField, Link, Button, MenuItem  } from '@mui/material'
import styled from '@emotion/styled';
import {  useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const RegisterFormBox = styled(Box)`
  width: 40%; 
  height: 80%; 
  border: 2px solid black; 
  border-radius: 10px; 
  display:flex; 
  justify-content:flex-start; 
  align-items:center; 
  flex-direction:column; 
`
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
const genderOptions = [
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
const validationSchema = Yup.object({
        firstName:Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        lastName:Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        age:Yup.number()
          .min(18, 'You must be at least 18 years old')
          .required('Required'),
        gender:Yup.string()
          .required('Required'),
        email:Yup.string()
          .email('Invalid email adress')
          .required('Required'),
        password: Yup.string()
          .required('No password provided.') 
          .min(8, 'Password is too short - should be 8 chars minimum.')
          .matches(/[0-9]/, 'Password requires a number')
          .matches(/[A-Z]/, 'Password requires an uppercase letter'),
        passwordRepeat: Yup.string().label('confirm password').required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    })

const RegisterForm = () => {

  const [ person, setPperson] = useState([])

  const formik = useFormik({
    initialValues: {
      firstName:'',
      lastName:'',
      age:'',
      gender:'',
      email:'',
      password:'',
      passwordRepeat:''
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema,
    onSubmit: values => {
      (JSON.stringify( values, null, 2 ));
      setPperson(values)
      console.log(formik)
    },
  })

  return (
   <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}>
      <RegisterFormBox>
        <Button sx={{position: 'absolute', right: '32%', marginTop:'10px'}}>
          <Link href="/" sx={{textDecoration: 'none'}} >Cancel</Link>
        </Button>
        <Typography variant='h3' sx={{marginTop: '40px'}}>Register new Account</Typography>
         <StyledInputBox component="form" onSubmit={formik.handleSubmit}>
           <TextField sx={{marginTop:'20px'}}
              id="firstName"
              error={!!formik.errors?.name && formik.touched.firstName}
              name="firstName"
              label="First name"
              type='text'
              variant="standard"
              helperText={formik.errors?.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
              <TextField sx={{marginTop:'20px'}}
              id="lastName"
              error = {!!formik.errors?.lastName}
              name="lastName"
              label="Last name"
              type='text'
              variant="standard"
              helperText={formik.errors?.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
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
              id="gender"
              name='gender'
              error = {!!formik.errors?.gender}
              select
              label="Select your gender"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant="standard"
              helperText={formik.errors?.gender}
              value={formik.values.gender}
            >
          {genderOptions.map(({value}) => (
            <MenuItem key={value} value={value}>
              {value}
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
      </RegisterFormBox>
    </Box>
  )
}

export default RegisterForm