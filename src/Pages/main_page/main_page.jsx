import { Box } from '@mui/system';
import { TextField, Link, Typography } from '@mui/material';
import LoginButton from '../../Components/login_button/login_ button';
import styled from '@emotion/styled';
import {  useFormik } from 'formik';
import * as Yup from 'yup';
import { userApi } from '../../Components/Api/userApi';

const LoginFormBox = styled(Box)`
  width: 40%;
  height: 55%;
  border: 2px solid black;
  border-radius: 10px ;
  display:flex;
  align-items:center;
  flex-direction:column;
`

const StyledInputBox =styled(Box)`
  display:flex;
  width:50%;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top:20px;
`;

const validationSchema = Yup.object({
        username: Yup.string()
          .required('Required'),
        password: Yup.string()
          .required('Required')
     })

const  MainPage = () => {

   const formik = useFormik({
     initialValues: {
       username: '',
       password: ''
     },
     validateOnBlur: false,
     validateOnChange: false,
     validationSchema,
        onSubmit:  values => {
          userApi.userLogin({username:values.username, password:values.password}).then(data => data)
          alert(JSON.stringify(values, null, 2));
     },
    })

return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}>
      <Box sx={{marginRight:'20px'}}>
        <Typography>
              Username: kminchelle 
        </Typography>
              <Typography>
              password: 0lelplR
        </Typography>
      </Box>
      <LoginFormBox >
         <Typography variant='h3' align='center' sx={{marginTop: '40px'}}>Welcome back !</Typography>
         <StyledInputBox component="form" onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              error = {!!formik.errors?.username}
              id="username"
              name="username"
              label="Username"
              type='text'
              variant="standard"
              helperText={formik.errors?.username}
              onChange={formik.handleChange}
              value={formik.values.username}
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
      </LoginFormBox>
    </Box>
  );
}

export default MainPage