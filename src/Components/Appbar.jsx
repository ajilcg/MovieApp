import React from 'react' 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
 import { Link } from 'react-router-dom';

const Appbar = () => {
  return (
    
          <Box sx={{ flexGrow: 1 }}>
       <AppBar position="static" style={{backgroundColor:'red'}} >
        <Toolbar> 
          <Typography style={{textAlign:'left'}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MOVIE APP
          </Typography> 
          <Link to={'/'}> <Button style={{color:'white'}} color="inherit" >Home</Button> </Link>
      <Link to={'/add'}> <Button style={{color:'white'}}  color="inherit">Add Movie</Button>  </Link>
       <Link to={'/login'} >  <Button style={{color:'white'}} color="inherit">LogOut</Button></Link>
         <Link to={'/signup'}> <Button  style={{color:'white'}}  color="inherit">Sign Up</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
 
  )
}

export default Appbar