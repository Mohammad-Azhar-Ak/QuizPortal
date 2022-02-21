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
import { FormControl } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LoginIcon from '@mui/icons-material/Login';

const useStyles = makeStyles(() => ({
  root: {
    height: '93vh',
    backgroundColor:"#f0f4c3",
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
    backgroundColor: '#f0f4c3',
    marginTop: "50px"
  },
  form: {
    width: '80%',
  },
  signinStyle: {
    padding: "50px 30px 30px 50px",
    backgroundColor:"#f0f4c3"
  },
  text: {
    margin: "15px",
  }
}));

const SignInComponent = ({ data, handleChange, handleClick, error }) => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={0} sm={0} md={6} >
        <img
          src={CustomLogo}
          className={classes.imageStyle}
        />
      </Grid>
      <Grid item
        xs={12}
        sm={12}
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
            <LoginIcon
            color="secondary"
             />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
          >
            Sign in
          </Typography>
          <FormControl sx={{minWidth:"70%"}}>
          <CustomInput
            label='Email'
            type='text'
            value={data.email}
            handleChange={(value) => handleChange(value, 'email')}
            error={error.email}
            helperText={error.email}
            placeholder="Enter your email"
          />
          <CustomInput
            label='Password'
            type='password'
            value={data.password}
            handleChange={(value) => handleChange(value, 'password')}
            error={error.password}
            helperText={error.password}
            placeholder="Enter your password"
          />
           </FormControl>
          <CustomButton
            label='signIn'
            type='submit'
            value='Submit'
            handleClick={handleClick} />

         
            <Grid item
              justify='center'
              className={classes.text}>
              <CustomLink
                body="Don't have an account? Sign Up"
                link='/signup' />
            </Grid>
          
         
        </div>
      </Grid>
    </Grid>
  )
}

export default SignInComponent
