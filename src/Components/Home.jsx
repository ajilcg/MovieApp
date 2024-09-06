import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Appbar from './Appbar';

const Home = () => {
    const [vData,setData]=useState([]);

useEffect(()=>{
    axios.get('https://dummyapi.online/api/movies').then((res)=>
        {
setData(res.data);
console.log(res.data);
    });
}),[];

  return (
    <Box sx={{ flexGrow: 1 }}> 
    <Appbar></Appbar><br></br>
    <Grid container spacing={2}> 
     {vData.map((item)=>(  
      <Grid item xs={4}>
      <Card style={{backgroundColor:'#dcdcdc'}} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {item.id}
        </Typography>
        <Typography variant="h5" component="div">
         {item.movie}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         {item.rating}
        </Typography> 
      </CardContent>
       <CardActions>
        <Button style={{color:'red'}} size="small">Learn More</Button>
      </CardActions>  
    </Card>
       </Grid> 
  ))}  
    </Grid>
  </Box>
  )
}
export default Home