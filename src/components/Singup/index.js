import * as React from 'react';
import firebase from 'firebase';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useInput } from '../../utils/useInput';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/const';
import { useDispatch } from 'react-redux';
import { signUpWithFB } from '../../store/Profile/actions';



const theme = createTheme();

export default function SignUp() {
  const dispatch= useDispatch();
  const {
    value: email, 
    handleChange: handleChangeEmail, 
    reset: resetEmail,
  }= useInput("");

  const {
    value: password, 
    handleChange: handleChangePassword, 
    reset: resetPassword,
  }= useInput("");



  const handleSubmit = async (event) =>  {
    event.preventDefault();
if(!password || !email){
  return;
}
dispatch(signUpWithFB(email, password))
      resetEmail();
      resetPassword();
 
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  value={email}
                  onChange={handleChangeEmail}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                value={password}
                onChange={handleChangePassword}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
                          </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={ROUTES.SINGIN} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}
