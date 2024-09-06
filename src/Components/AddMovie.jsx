import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Appbar from './Appbar';

export const AddMovie = () => {
   
  return (
    
    <div> 
      <Appbar></Appbar>
          <Box  style={{verticalAlign:'middle'}}
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '27ch' },
    }}
    noValidate
    autoComplete="off"
  >
      <h4 >ADD MOVIE</h4>
    <div>
      <div>
      <TextField
        required
        label="Movie Name"
        inputProps={{
          type: "text",
        }}
      />
       </div>
    
      <div>
      <TextField 
      label = {'Discription'}
      highlightColor = {'red'} 
       
      multiline = 'true' />
      </div>
      <div>
      <TextField
          id="outlined-password-input"
          label="Rating"
          type="number"
          autoComplete="current-password"
        />
      </div> 
      <div > 
        <div >    
              <Button variant="contained" style={{backgroundColor:'red'}} >ADD</Button> &nbsp;
      <Button  type="reset" defaultValue="Reset" variant="contained" style={{backgroundColor:'red'}} >Clear</Button> 

      </div>

        </div>   
        </div>
  
  </Box>
  </div>

  )
}
