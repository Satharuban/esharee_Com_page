import React from 'react';
// import LogInImg from '../assests/Login3.svg';
import SignupImg from '../assests/signup-img.gif';
// import LogInImg from '../assests/secure-login.gif';
import { useStyles } from '../components/styles';
import Grid from '@material-ui/core/Grid';
import Forget from '../components/Forget/Forget';
import NavBar from '../components/Home/Header/Header';

const ForgetPassword = () => {

    const classes = useStyles();

    return (
        <div className="login">
            <NavBar/>
            <div className={classes.root}>
                <Grid container>
                    <Grid xs={12} sm={6} md={6} lg={6}>
                        <Forget />
                    </Grid>
                    <Grid
                        justify="center"
                        xs={false} sm={6} md={5} lg={5}>
                        <img style={{width:"100%"}} src={SignupImg} alt="" />
                    </Grid>
                </Grid>
            </div>
        </div >
    )
}

export default ForgetPassword;
