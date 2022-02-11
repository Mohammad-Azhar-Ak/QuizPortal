// import React, { Fragment } from 'react'

// const QuizPageComponent = ({ }) => {
//     return (
//         <Fragment>
//             <h1 style={{ color: 'green' }}>Welcome to Quiz Page</h1>
//         </Fragment>
//     )
// }

// export default QuizPageComponent

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions,Grid } from '@mui/material';
import {CustomRadioButton,Button} from '../../../shared';
import {choice} from '../../../shared/constants'
const QuizPageComponent=()=> {
  const btnstyle={margin:'8px 0'}
  return (

    <Grid container padding={5} margin={10}>
      <Grid item xs={5}>
    <Card sx={{ maxWidth: 545 }}>
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Quiz 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
    
      <Grid container>
        <Grid item xs={4}></Grid>
        
        <Grid item xs={6}> <CustomRadioButton options={choice}  /> </Grid>
      </Grid>
      
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={5}>
     <Card sx={{ maxWidth: 545 }}>
     <CardActionArea>
      
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
         Quiz
         </Typography>
         <Typography variant="body2" color="text.secondary">
           Lizards are a widespread group of squamate reptiles, with over 6,000
           species, ranging across all continents except Antarctica
         </Typography>
       </CardContent>
     </CardActionArea>
     <CardActions>

     <Grid container>
        <Grid item xs={4}></Grid>
        
        <Grid item xs={6}> <CustomRadioButton options={choice} /> </Grid>
      </Grid>
      

     </CardActions>
   </Card>
   </Grid>
            <Grid container> 
            <Grid item xs={4}> </Grid>
              <Grid item xs={2}> <Button name='Submit Quiz'/> </Grid>
            </Grid>
   </Grid>
  );
}
export default  QuizPageComponent;