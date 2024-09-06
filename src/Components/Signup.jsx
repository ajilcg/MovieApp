import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export const Signup = () => {
  return (
    <div>  <form>   <Box  style={{paddingTop:'centre'}}
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '27ch' },
    }}
    noValidate
    autoComplete="off"
  >
      <h4 >SIGN UP</h4>
    <div>
       
    <div>
      <TextField
        required
        label="Full Name"
        inputProps={{
          type: "text",
        }}
      />
       </div>
       <div>
      <TextField
        required
        label="Phone"
       />
       </div>
      <div>
      <TextField
        required
        label="Email"
    type="email"
    
      />
       </div>
     
      <div>
      <TextField
          id="outlined-password-input"
          label="Password"
          required
          type="password"
          autoComplete="current-password"
        />
      </div> 
      <div > 
     <Link to={'/login'}><Button  variant="contained" style={{backgroundColor:'red'}} >SignUp</Button></Link>  &nbsp;
      <Button  type="reset" defaultValue="Reset" variant="contained" style={{backgroundColor:'red'}} >Clear</Button> 

         </div>   
        </div>
  
  </Box>
  </form>
  </div>
  )
}
