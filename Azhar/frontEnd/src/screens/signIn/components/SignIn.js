import React from 'react';
import Avatar from '@mui/material/Avatar';
import {Button} from '../../../shared';
import CssBaseline from '@mui/material/CssBaseline';
import {Input} from '../../../shared';
import {Link} from '../../../shared';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import {CustomLogo} from '../../../assets/images';
import { Box } from '@mui/system';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
  },
  image: {
    //backgroundImage: `url(${CustomLogo})`,
 //   backgroundRepeat: '',
//     backgroundColor:
//       theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  },
  imageStyle:{
    padding: 30,
    width: "100%",
    height: "100%",

  },
  paper: {
    // margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    // margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
  },
  submit: {
    // margin: theme.spacing(3, 0, 2),
  },
  signinStyle:{
    padding: "50px 30px 30px 50px",
  },
  text:{
    margin: "78px",
  }
}));

const SignInComponent=({data,handleChange,handleClick})=> {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
    
      <CssBaseline />
      <Grid item xs={0} sm={6} md={6} >
        <img src={CustomLogo} className={classes.imageStyle}/>
      </Grid>
      <Grid item xs={12} sm={6} md={6} component={Paper} elevation={0} square className={classes.signinStyle}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
         
            <Input name='email' type='text' value={data.email} handleChange={(value)=> handleChange(value,'email')}/>
            <Input name='password' type='password' value={data.password} handleChange={(value)=> handleChange(value,'password')}/>
            <Button label='signIn' type='submit' value='Submit' handleClick={handleClick}/>
           
            <Grid container >
              <Grid item justify = 'right' className={classes.text}>
                <Link body="Don't have an account? Sign Up" link='/signup'/>
              </Grid>
            </Grid>
        </div>
      </Grid>
    
    </Grid>
  )
  }

export default SignInComponent
