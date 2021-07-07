import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Paper } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useStyles } from '../styles';

export default function PhoneRegister() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Paper elevation={1} className={classes.paper} style={{ padding: 20, borderRadius: 15 }}>
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center">
                        <Button href="/register" style={{ color: "#CF0505", marginLeft: -10 }}>
                            <ArrowBackIcon />
                        </Button></Grid>
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" style={{ marginLeft: 0, marginTop: 0, marginBottom: 8 }}>

                        <Typography component="h1" variant="h5" style={{ color: "#CF0505", fontSize: 30, fontWeight: 800, padding: 5 }}>
                            Create an account
                </Typography>

                    </Grid>
                    <form className={classes.form} noValidate>

                        <Grid container>
                            <Grid item xs={12} sm={12} style={{ padding: "10px" }}>
                                <h3 style={{ paddingBottom: "10px" }}>Enter your Phone Number</h3>
                                <PhoneInput
                                    country='us'
                                    regions={['north-america', 'carribean']}

                                />
                            </Grid>
                        </Grid>
                        <Grid container directon="row" justify="flex-start" alignItems="center" xs={12} sm={12} style={{ marginBottom: -10, paddingTop: 10, paddingBottom: 10 }}>
                            <Grid item  >    <Checkbox
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
                        <Grid item xs={12} sm={12} container justify="center">
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                style={{ backgroundColor: "#CF0505", fontSize: 17, fontWeight: 800, padding: 8, borderRadius: 10 }}
                            >
                                Get Started
                    </Button>

                        </Grid>
                    </form>
                    <div className='sign-line' style={{ paddingBottom: "10px" }}>
                        or
                    </div>
                    <Grid xs={12} sm={12} container justify="center" style={{ paddingBottom: "10px" }}>
                        <Button href="/register" style={{ borderColor: "gray", borderStyle: "solid", borderWidth: " 0px", color: "#CF0505" }}>
                            Create with email
                        </Button>
                    </Grid>

                    <Grid container xs={12} sm={12} justify="center" alignItems="center" style={{ paddingTop: "10px", fontSize: 14, marginBottom: 5 }}>
                        Already have an account?   <Link href="/login" style={{ textDecoration: "none" }}>
                            <span style={{ color: "#000", paddingLeft: 5 }}> </span> LogIn
                    </Link>
                    </Grid>
                </Paper>
            </div>
        </Container>
    );
}