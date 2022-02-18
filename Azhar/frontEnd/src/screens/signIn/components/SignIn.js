import React from 'react';
import Avatar from '@mui/material/Avatar';
import { CustomButton } from '../../../shared';
import CssBaseline from '@mui/material/CssBaseline';
import { CustomInput } from '../../../shared';
import { CustomLink } from '../../../shared';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { CustomLogo } from '../../../assets/images';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
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
    width: '80%',
  },
  signinStyle: {
    padding: "50px 30px 30px 50px",
  },
  text: {
    margin: "78px",
  }
}));

const SignInComponent = ({ data, handleChange, handleClick, error }) => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={0} sm={0} md={6} >
        <img
          src={CustomLogo}
          className={classes.imageStyle}
        />
      </Grid>
      <Grid item
        xs={12}
        sm={6}
        md={6}
        component={Paper}
        elevation={0}
        square
        className={classes.signinStyle}
      >
        <div
          className={classes.paper}
        >
          <Avatar>
            <LockIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
          >
            Sign in
          </Typography>
          <CustomInput
            label='email'
            type='text'
            value={data.email}
            handleChange={(value) => handleChange(value, 'email')}
            error={error.email}
            helperText={error.email}
          />
          <CustomInput
            label='password'
            type='password'
            value={data.password}
            handleChange={(value) => handleChange(value, 'password')}
            error={error.password}
            helperText={error.password}
          />
          <CustomButton
            label='signIn'
            type='submit'
            value='Submit'
            handleClick={handleClick} />

          <Grid container >
            <Grid item
              justify='center'
              className={classes.text}>
              <CustomLink
                body="Don't have an account? Sign Up"
                link='/signup' />
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  )
}

export default SignInComponent
