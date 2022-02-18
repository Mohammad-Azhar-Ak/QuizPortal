import React from 'react';
import Avatar from '@mui/material/Avatar';
import { CustomButton, CustomPositionedSnackbar } from '../../../shared';
import CssBaseline from '@mui/material/CssBaseline';
import { CustomInput } from '../../../shared';
import { CustomLink } from '../../../shared';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { SignUpImg } from '../../../assets/images';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  imageStyle: {
    padding: 30,
    width: "80%",
    height: "80%",

  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', 
  },
  submit: {
  },
  signUpStyle: {
    padding: "30px"
  }
}));

function SignUpComponent({ data, handleChange, handleClick, error,handleClose,open }) {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={false} md={6}  >
        <img src={SignUpImg} className={classes.imageStyle} />
      </Grid>
      <Grid item xs={12} sm={12} md={6} component={Paper} elevation={0} square className={classes.signUpStyle}>
        <div className={classes.paper}>
          <Avatar>
            <LockIcon color='primary'/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <CustomInput label='Name' type='text' value={data.name} handleChange={(value) => handleChange(value, 'name')} error={error.name} helperText={error.name} />
          <CustomInput label='Email' type='text' value={data.email} handleChange={(value) => handleChange(value, 'email')} error={error.email} helperText={error.email} />
          <CustomInput label='Mobile' type='number' value={data.mobile} handleChange={(value) => handleChange(value, 'mobile')} error={error.mobile} helperText={error.mobile} />
          <CustomInput label='Password' type='password' value={data.password} handleChange={(value) => handleChange(value, 'password')} error={error.password} helperText={error.password} />
          <CustomInput label='Confirm Password' type='password' value={data.confirm_password} handleChange={(value) => handleChange(value, 'confirm_password')} error={error.confirm_password} helperText={error.confirm_password} />
          <CustomButton label='Sign Up' type='submit' value='Submit' handleClick={handleClick} />
          <Grid container >
            <Grid item justify='right'>
              <CustomLink body="Already have an account? Sign In" link='/' />
            </Grid>
          </Grid>
        </div>
        <CustomPositionedSnackbar
        anchorOrigin={ {vertical:"bottom", horizontal:"left" }}
        open={open}
        onClose={handleClose}
        message="User Already Exist"
      />
      </Grid>
    </Grid>
  )
}

export default SignUpComponent

