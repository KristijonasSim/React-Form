import { Box } from '@mui/system';
import Typography from '@mui/material/Typography'; 
import { TextField } from '@mui/material';
import LoginButton from '../../Components/login_button/login_ button';
import { Link } from 'react-router-dom'

function MainPage () {
return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}>
      <Box sx={{ width: '40%', height: '55%', border: '2px solid black', borderRadius: '10px', display:'flex', justifyContent:'flex-start', alignItems:'center', flexDirection:'column' }}>
         <Typography variant='h3' align='center' sx={{marginTop: '40px'}}>Welcome back !</Typography>
         <Box sx={{width:'50%', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'20px'}}>
            <TextField
              fullWidth
              required
              id="standard-required"
              label="Email"
              variant="standard"
            />
            <TextField
              fullWidth
              required
              id="standard-password-input"
              label="Password"
              type="password"
              variant="standard"
            />
        </Box>
        <LoginButton />
        <Box sx={{marginTop:'40px'}}>
          <Typography variant='h6'> Don't have an account? <Link to="Register">Register</Link></Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default MainPage