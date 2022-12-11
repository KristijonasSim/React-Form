import './App.css';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography'; 
import BoxForm from './Components/box_form/box_form';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import LoginButton from './Components/login_button/login_ button';
import Link from '@mui/material/Link';

function App() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}>
      <Box sx={{ width: '40%', height: '55%', border: '2px solid black', borderRadius: '10px', display:'flex', justifyContent:'flex-start', alignItems:'center', flexDirection:'column' }}>
         <Typography variant='h3' align='center' sx={{marginTop: '40px'}}>Welcome back !</Typography>
         <Box sx={{width:'100%', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'20px'}}>
            <Box sx={{display:'flex', marginTop:'20px', width:'50%', justifyContent:'center'}}>
            <TextField
              required
              fullWidth="fullWidth"
              id="standard-required"
              label="Email"
              variant="standard"
            />
            </Box>
          <Box sx={{ display: 'flex', marginTop: '20px', width: '50%', justifyContent: 'center' }}>
            <TextField
              fullWidth="fullWidth"
              required
              id="standard-password-input"
              label="Password"
              type="password"
              variant="standard"
            />
            </Box>
        </Box>
        <LoginButton />
        <Box sx={{marginTop:'40px'}}>
          <Typography variant='h6'> Don't have an account? <Link sx={{cursor:'pointer'}}>Register</Link></Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
