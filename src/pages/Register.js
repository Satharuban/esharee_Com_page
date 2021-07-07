import React from 'react';
import SignupImg from '../assests/createAcc.svg';
import { useStyles } from '../components/styles';
import Grid from '@material-ui/core/Grid';
import Emailregister from '../components/Signup/EmailRegister';
import NavBar from '../components/Home/Header/Header';

const Register = () => {

    const classes = useStyles();

    return (
        <div className="login">
            <NavBar/>
            <div className={classes.root}>
                <Grid container>
                    <Grid xs={12} sm={6} md={6} lg={6}>
                        <Emailregister />
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

export default Register;
