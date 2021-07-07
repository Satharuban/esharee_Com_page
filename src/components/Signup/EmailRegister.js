import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Container,Paper} from '@material-ui/core';
import { useStyles } from '../styles';
import axios from 'axios';
import { showErrMsg, showSuccessMsg } from '../utils/Notification/Notification';
import { isEmpty, isEmail, isLength, isMatch } from '../utils/Validation/Validation';


const initialState = {
  fname: '',
  name: '',
  email: '',
  password: '',
  cf_password: '',
  err: '',
  success: ''
}

export default function Register() {
  const classes = useStyles();

  const [user, setUser] = useState(initialState);

  const { fname, name, email, password, cf_password, err, success } = user;

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: '', success: '' });
  }

  const handleSubmit = async e => {
    e.preventDefault();
    if (isEmpty(fname) || isEmpty(name) || isEmpty(password)) {
      return setUser({ ...user, err: 'Please fill in all fields', success: '' });
    }

    if (!isEmail(email)) {
      return setUser({ ...user, err: 'Invalid emails.', success: '' });
    }

    if (isLength(password)) {
      return setUser({ ...user, err: 'Password must be atleast 6 characters.', success: '' });
    }

    if (!isMatch(password, cf_password)) {
      return setUser({ ...user, err: 'Password did not match.', success: '' });
    }
    try {
      const res = await axios.post('/user/register', {
        fname, name, email, password
      })

      setUser({ ...user, err: '', success: res.data.msg })

    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: '' })
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={1} className={classes.paper} style={{ padding: 30, borderRadius: 15 }}>
        <Grid container
          direction="row"
          justify="flex-start"
          alignItems="center" style={{ marginLeft: 0, marginTop: 0, marginBottom: 8 }}>
          <Typography component="h1" variant="h5" style={{ color: "#CF0505", fontSize: 30, fontWeight: 800, padding: 5 }}>
            Create an account
          </Typography>
        </Grid>
        {err && showErrMsg(err)}
        {success && showSuccessMsg(success)}
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="name"
                name="fname"
                variant="outlined"
                required
                fullWidth
                id="fname"
                label="First Name"
                autoFocus
                value={fname}
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Last Name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="cf_password"
                label="Confirm Password"
                type="password"
                id="cf_password"
                autoComplete="current-password"
                value={cf_password}
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid container directon="row" justify="flex-start" alignItems="center" xs={12} sm={12} style={{ marginBottom: -10, paddingTop: 10, paddingBottom: 10 }}>
              <Grid item  >
                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item directon="row" justify="center" alignItems="center" style={{ paddingTop: 20 }} >
                <Grid item  > <span style={{ color: "#000", fontSize: 14 }}> I agree to the Esharee </span><Link href="/login" style={{ textDecoration: "none", fontSize: 12, height: 1 }}>
                  User Agreement</Link><span style={{ color: "#000", fontSize: 14 }}> and</span> </Grid>
                <Grid item  > <Link href="/login" style={{ textDecoration: "none", fontSize: 12 }}>Privacy Policy</Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ backgroundColor: "#CF0505", fontSize: 17, fontWeight: 800, padding: 8, borderRadius: 10 }}
          >
            SignUp
          </Button>

        </form>
        <div className='sign-line' style={{ paddingBottom: "10px" }}>
          or
        </div>
        <Grid xs={12} sm={12} >
          <Button href="/phone" style={{ borderColor: "gray", borderStyle: "solid", borderWidth: " 0px", color: "#CF0505" }}>
            Get started with phone number
          </Button>
        </Grid>
        <Grid container xs={12} sm={12} justify="center" alignItems="center" style={{ paddingTop: "10px", fontSize: 14, marginBottom: 5 }}>
          Already have an account?   <Link to="/login" style={{ textDecoration: "none" }}>
            <span style={{ color: "#000", paddingLeft: 5 }}> </span> LogIn
                    </Link>
        </Grid>
      </Paper>

    </Container>
  );
}