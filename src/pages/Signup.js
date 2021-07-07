import React from 'react';
// import SignupImg from '../assests/signUp.svg';
import { useStyles } from '../components/styles';
import Grid from '@material-ui/core/Grid';
import SignupForm from '../components/Signup/SignupForm';
import NavBar from '../components/navbar/navbar';

const Login = () => {

    const classes = useStyles();

    return (
        <div className="login">
            <NavBar/>
            <div className={classes.root}>
                <Grid container>
                    <Grid xs={12} sm={6} md={6} lg={6}>
                        <SignupForm />
                    </Grid>
                    <Grid
                        justify="center"
                        xs={12} sm={6} md={5} lg={5}>
                        <img style={{width:"100%"}} src="https://image.freepik.com/free-vector/two-step-authentication-vector-illustration_100456-2148.jpg" alt="" />
                    </Grid>
                </Grid>
            </div>
        </div >
    )
}

export default Login;
