import React from 'react'
 import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
 import { Link } from 'react-router-dom';
  export const Login = () => { 
  return (
    <div>   
           <Box style={{paddingTop:'8%'}}
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '27ch' },
    }}
    noValidate
    autoComplete="off"
  >
       <h4 >Login</h4>
    <div>
       <div>
      <TextField
        required
        label="Email"
        inputProps={{
          type: "email",
        }}
      

      />
       </div>
     
      <div>
      <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </div> 
      <div >

        <Link to='/signup'> <Button variant="contained" style={{backgroundColor:'red'}} >signup</Button> </Link>
        <Link to='/'> <Button variant="contained" style={{backgroundColor:'red'}} formv>LOGIN</Button> </Link>


         </div>  <br></br> 
        </div>
   
  </Box> 
  </div>

  )
}
export default Login