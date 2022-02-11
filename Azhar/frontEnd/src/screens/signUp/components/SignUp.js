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
import {SignUpImg} from '../../../assets/images';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
  },
  image: {
    // backgroundImage: `url(${SignUpImg})`,
    backgroundRepeat: 'no-repeat',
//     backgroundColor:
//       theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  imageStyle:{
    padding: 30,
    width: "90%",
    height: "90%",

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
  signUpStyle :{
    padding: "30px"
  }
}));

function SignUpComponent({data,handleChange,handleClick}) {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7}  >
        <img src={SignUpImg} className={classes.imageStyle}/>
        </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square className={classes.signUpStyle}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
            <Input name='name' type='text' value={data.name} handleChange={(value)=> handleChange(value,'name')}/>
            <Input name='email' type='text' value={data.email} handleChange={(value)=> handleChange(value,'email')}/>
            <Input name='mobile' type='number' value={data.mobile} handleChange={(value)=> handleChange(value,'mobile')}/>
            <Input name='password' type='password' value={data.password} handleChange={(value)=> handleChange(value,'password')}/>
            <Input name='confirm password' type='password' value={data.confirm_password} handleChange={(value)=> handleChange(value,'confirm_password')}/>
            <Button label='Sign Up' type='submit' value='Submit' handleClick={handleClick}/>
            <Grid container >
              <Grid item justify = 'right'>
                <Link body="Already have an account? Sign In" link='/'/>
              </Grid>
            </Grid>
        </div>
      </Grid>
    </Grid>
  )
  }

export default SignUpComponent

