import React from 'react';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import AppleLogin from 'react-apple-login';
import { useStyles } from '../styles';
import {
    Grid,
    Checkbox,
    CssBaseline,
    Link,
    Paper,
    Container,
    Typography
} from '@material-ui/core';
import './SignupForm.css';
import Logo from '../../assets/navbar/EShareLogoNoBG.png';
 
const SignupForm = () => {

    const responseGoogle = response => {
        console.log(response);
    };

    const responseFacebook = response => {
        console.log(response);
    };

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper elevation={0} className={classes.paper} style={{ padding: 5, borderRadius: 15 }}>
                {/* <Avatar style={{backgroundColor: "#1976d2"}} className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography> */}
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center" style={{ marginLeft: -30, marginTop: 20, marginBottom: 8 }}>
                    {/* <Avatar style={{backgroundColor: "#CF0505"}} className={classes.avatar}>
                    <LockOutlinedIcon  />
                </Avatar> */}
                    <Typography component="h1" variant="h5" style={{ color: "#CF0505", fontSize: 30, fontWeight: 800, padding: 5 }}>
                        Join to
                </Typography>
                    <img src={Logo} width="150"  alt="logo" style={{ marginLeft: -10 }} />
                </Grid>
                <form className={classes.form} noValidate>
                    <Grid container>
                        <Grid container xs={12} sm={12} justify="center" style={{ paddingTop: "10px", paddingBottom: "5px" }}>
                            <Link
                                style={{ textDecoration: "none", color: "#000" }}
                                className="user auth-signup-btn"
                                href="/register"
                            >
                                <i class="fa fa-user fa-fw"></i> Continue with Email or Phone
                            </Link>
                        </Grid>
                        <br />
                        <Grid container xs={12} sm={12} justify="center" style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                            <AppleLogin
                                clientId={"com.react.apple.login"}
                                redirectURI={"https://redirectUrl.com"}
                                responseType={"code"}
                                responseMode={"query"}
                                usePopup={false}
                                render={renderProps => (
                                    <span
                                        className="apple auth-signup-btn"
                                        onClick={renderProps.onClick}
                                    >
                                        <i class="fab fa-apple fa-fw"></i> Continue with Apple
                                    </span>
                                )}
                            />
                        </Grid>
                        <Grid xs={12} sm={12} container justify="center" style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                            <GoogleLogin
                                clientId="1039310500029-ej3uqacnfqrjkemp8lqq9eavb4p5t41a.apps.googleusercontent.com"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                render={renderProps => (
                                    <span
                                        className="go auth-signup-btn"
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                    >
                                        <i class="fab fa-google fa-fw"></i> Continue with Google
                                    </span>
                                )}
                            ></GoogleLogin>
                        </Grid>
                        <Grid container xs={12} sm={12} justify="center" style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                            <FacebookLogin
                                appId="923168938514989"
                                autoLoad={false}
                                callback={responseFacebook}
                                render={renderProps => (
                                    <span
                                        className="fb auth-signup-btn"
                                        onClick={renderProps.onClick}
                                    >
                                        <i class="fab fa-facebook fa-fw"></i> Continue with Facebook
                                    </span>
                                )}
                            />
                        </Grid>
                    </Grid>
                </form>
                <Grid container directon="row" justify="center" alignItems="center" xs={12} sm={12} style={{ marginBottom: -10 }}>
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
                <div className='sign-line'>
                    or
                    </div>
                <Grid container xs={12} sm={12} justify="center" alignItems="center" style={{ paddingTop: "10px", fontSize: 14, marginBottom: 20 }}>
                    Already have an account?   <Link href="/login" style={{ textDecoration: "none" }}>
                        <span style={{ color: "#000", paddingLeft: 5 }}> </span> LogIn
                    </Link>
                </Grid>
            </Paper>
        </Container>
    )
}

export default SignupForm;
