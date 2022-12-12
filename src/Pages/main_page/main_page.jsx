import { Box } from '@mui/system';
import { TextField, Link, Typography } from '@mui/material';
import LoginButton from '../../Components/login_button/login_ button';
import styled from '@emotion/styled';
import {  useFormik } from 'formik';
import * as Yup from 'yup';


const StyledInputBox =styled(Box)`
  display:flex;
  width:50%;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top:20px;
`;

function MainPage () {
   const formik = useFormik({
     initialValues: {
       email: '',
       password: ''
     },
     validateOnBlur: false,
     validateOnChange: false,
     validationSchema: Yup.object({
        email: Yup.string()
          .email('Invalid email adress')
          .required('Required'),
        password: Yup.string()
          .required('Required'),

     }),
        onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
    })
console.log(formik)


return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}>
      <Box sx={{ width: '40%', height: '55%', border: '2px solid black', borderRadius: '10px', display:'flex', justifyContent:'flex-start', alignItems:'center', flexDirection:'column' }}>
         <Typography variant='h3' align='center' sx={{marginTop: '40px'}}>Welcome back !</Typography>
         <StyledInputBox component="form" onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              error = {!!formik.errors?.email}
              id="email"
              name="email"
              label="Email"
              type='email'
              variant="standard"
              helperText={formik.errors?.email}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <TextField sx={{mt: 4}}
              fullWidth
              error = {!!formik.errors?.password}
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="standard"
              helperText={formik.errors?.password}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
              <LoginButton />
        </StyledInputBox>
        <Box sx={{marginTop:'40px'}}>
          <Typography variant='h6'> Don't have an account? <Link sx={{ textDecoration: 'none'}} href="register">Register</Link></Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default MainPage