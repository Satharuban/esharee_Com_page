import React from 'react';
// import LogInImg from '../assests/Login3.svg';
// import LogInImg from '../assests/login-animate.svg';
import LogInImg from '../assets/ani.svg';
import { useStyles } from '../components/styles';
import { Grid } from '@material-ui/core';
import LoginForm from '../components/Login/LoginForm';
import Navbar from '../components/navbar/navbar';

const Login = () => {

    const classes = useStyles();

    return (
        <div className="login"   >
            <Navbar/>
           
            
            <div className={classes.root}>
                <Grid container>
                    <Grid xs={12} sm={6} md={6} lg={6} >
                        <LoginForm />
                    </Grid>
                    <Grid
                        container
                        justify="center"
                        alignItems="center"
                        xs={12} sm={6} md={5} lg={5}>
                        <img style={{width:"100%", height:"100%"}} src={LogInImg} alt="" />
                    </Grid>
                </Grid>
            </div>
        </div >
    )
}

export default Login;
