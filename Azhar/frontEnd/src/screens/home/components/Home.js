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
import { CardActionArea, CardActions, Grid } from '@mui/material';
import { RadioButton, Button } from '../../../shared';
const HomeComponent = (handleClick) => {
    const btnstyle = { margin: '8px 0' }
    return (

        <Grid container spacing={2} padding={2}>
            <Grid container>
                <Typography variant='h3'>
                    Play Quiz!
                </Typography>
            </Grid>
            <Grid Container spacing={2}>
                <Grid item xs={12}>
                    <Card xs={{ maxWidth: "max" }}>
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
                        {/* <CardActions>
    
      <Grid container>
        <Grid item xs={4}></Grid>
        
        <Grid item xs={6}> <Button name="Play Quiz" /> </Grid>
      </Grid>
      
      </CardActions> */}
                    </Card>
                    <Grid item xs={4}>
                        <Grid container xs={1}>
                            <Button label="Play Quiz" type="submit" value="Submit" handleClick={handleClick} />
                        </Grid>
                    </Grid>


                </Grid>


            </Grid>

        </Grid>
    );
}
export default HomeComponent;

// import React, { Fragment } from 'react'

// const HomeComponent = ({ }) => {
//     return (
//         <Fragment>
//             <h1 style={{ color: 'green' }}>Welcome to Home Page</h1>
//         </Fragment>
//     )
// }

// export default HomeComponent