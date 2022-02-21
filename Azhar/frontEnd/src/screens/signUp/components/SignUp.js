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
import { FormControl } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const useStyles = makeStyles(() => ({
  root: {
    height: '93vh',
    backgroundColor: "#f0f4c3",
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
    backgroundColor: "#f0f4c3",
    marginTop: "30px"
  },
  form: {
    width: '100%',
  },
  submit: {
  },
  signUpStyle: {
    padding: "30px",
    backgroundColor: "#f0f4c3"
  }
}));

function SignUpComponent({ data, handleChange, handleClick, error, handleClose, open }) {
  const classes = useStyles();

  return (
    <Grid
      container
      component="main"
      className={classes.root}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={false}
        md={6}  >
        <img
          src={SignUpImg}
          className={classes.imageStyle} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        component={Paper}
        elevation={0}
        className={classes.signUpStyle}>
        <div
          className={classes.paper}>
          <Avatar>
            <AddCircleIcon
              color='secondary' />
          </Avatar>
          <Typography
            component="h1"
            variant="h5">
            Sign Up
          </Typography>
          <FormControl
            sx={{ minWidth: "70%" }}>
            <CustomInput
              label='Name'
              type='text'
              value={data.name}
              handleChange={(value) => handleChange(value, 'name')}
              error={error.name}
              helperText={error.name}
              placeholder="Enter your name" />
            <CustomInput
              label='Email'
              type='text'
              value={data.email}
              handleChange={(value) => handleChange(value, 'email')}
              error={error.email}
              helperText={error.email}
              placeholder="Enter your email" />
            <CustomInput
              label='Mobile'
              type='number'
              value={data.mobile}
              handleChange={(value) => handleChange(value, 'mobile')}
              error={error.mobile}
              helperText={error.mobile}
              placeholder="Enter your mobile number" />
            <CustomInput
              label='Password'
              type='password'
              value={data.password}
              handleChange={(value) => handleChange(value, 'password')}
              error={error.password}
              helperText={error.password}
              placeholder="Enter your password" />
            <CustomInput
              label='Confirm Password'
              type='password'
              value={data.confirm_password}
              handleChange={(value) => handleChange(value, 'confirm_password')}
              error={error.confirm_password}
              helperText={error.confirm_password}
              placeholder="Enter confirm password" />
          </FormControl>
          <CustomButton
            label='Sign Up'
            type='submit'
            value='Submit'
            handleClick={handleClick} />
          <Grid
            item
            justify="center">
            <CustomLink
              body="Already have an account? Sign In"
              link='/' />
          </Grid>
        </div>
        <CustomPositionedSnackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          onClose={handleClose}
          message="Email Already Exist"
        />
      </Grid>
    </Grid>
  )
}

export default SignUpComponent

