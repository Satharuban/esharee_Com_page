import React from 'react';
import SignupImg from '../assests/mobileCreateAcc.svg';
import { useStyles } from '../components/styles';
import Grid from '@material-ui/core/Grid';
import Phoneregister from '../components/Signup/PhoneRegister';
import NavBar from '../components/Home/Navbar/nav';

const Register = () => {

    const classes = useStyles();

    return (
        <div className="login">
            <NavBar/>
            <br/>
            <br/>

            <div className={classes.root}>
                <Grid container justify="center" alignItems="center">
                    <Grid xs={12} sm={6} md={6} lg={6}>
                        <Phoneregister />
                    </Grid>
                    <Grid
                    container
                       justify="center" alignItems="center"
                        xs={12} sm={6} md={5} lg={5}>
                        <img style={{width:"80%"}} src={SignupImg} alt="" />
                    </Grid>
                </Grid>
            </div>
        </div >
    )
}

export default Register;
