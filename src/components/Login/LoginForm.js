import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import AppleLogin from 'react-apple-login';
import GoogleLogo from '../../assets/google-icon.svg';
import FBLogo from '../../assets/fb-logo.png';
import AppleLogo from '../../assets//apple-logo.png';
import { useStyles } from '../../components/styles';
import {
    Grid,
    FormControlLabel,
    Checkbox,
    Button,
    CssBaseline,
    InputBase,
    Paper,
    Link,
    Container,
    Typography
} from '@material-ui/core';
import './LoginForm.css';
import axios from 'axios';
import { showErrMsg, showSuccessMsg } from '../utils/Notification/Notification';
import { dispatchLogin } from '../../redux/actions/authAction';
import { useDispatch } from 'react-redux';


const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}

const LoginForm = () => {

    const [user, setUser] = useState(initialState);

    const dispatch = useDispatch();

    const history = useHistory();

    const { email, password, err, success } = user;

    const handleChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value, err: '', success: '' });
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('/user/login', { email, password })
            setUser({ ...user, err: '', success: res.data.msg })

            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin());
            history.push("/")

        } catch (err) {
            err.response.data.msg &&
                setUser({ ...user, err: err.response.data.msg, success: '' })
        }
    }

    const responseGoogle = async (response) => {
        try {
            const res = await axios.post('/user/google_login', { tokenId: response.tokenId })
            setUser({ ...user, err: '', success: res.data.msg })

            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin());
            history.push("/")
        } catch (err) {
            err.response.data.msg &&
                setUser({ ...user, err: err.response.data.msg, success: '' })
        }
    };

    const responseFacebook = async response => {
        try {
            const { accessToken, userID } = response
            const res = await axios.post('/user/facebook_login', { accessToken, userID })
            setUser({ ...user, err: '', success: res.data.msg })

            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin());
            history.push("/")
        } catch (err) {
            err.response.data.msg &&
                setUser({ ...user, err: err.response.data.msg, success: '' })
        }
    };

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper elevation={1} className={classes.paper }  >
                <Grid style={{ margin:2,width:"100%" }}
                   >

                    <Typography  className={classes.submit} style={{ color: "#fff", fontSize: 33, fontWeight: 800, borderRadius:10, padding:10,marginTop:-15,width:"100%" }}>
                        Welcome to Esharee
                </Typography></Grid>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
                <form onSubmit={handleSubmit} style={{ padding: 20, borderRadius: 10 }} className={classes.form} noValidate>
                    <InputBase
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        placeholder="Email or Phone"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        
                        value={email}
                        onChange={handleChangeInput}
                        style={{  width: "100%" ,backgroundColor:'#EFF1F7',borderRadius:10,padding:10,marginBottom:10}}
                    />
                  
                    <InputBase
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        placeholder="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={handleChangeInput}
                        style={{  width: "100%" ,backgroundColor:'#EFF1F7',borderRadius:10,padding:10}}
                    />
                    <Grid container
                        direction="row"
                        justify="flex-end"
                        alignItems="center" style={{ marginTop: 10 }}>

                        <Grid item xs container
                            direction="row"
                            justify="flex-start"
                            alignItems="center">
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                        </Grid>
                        <Grid item xs container
                            direction="row"
                            justify="flex-end"
                            alignItems="center">
                            <Link href="/forget" variant="body2" style={{ color: "#408BD3", fontWeight: 500 }}>
                                Forgot password?
                        </Link>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        style={{ backgroundColor:"", fontSize: 20, fontWeight: 600, padding: 7, borderRadius: 10 }}
                    >
                        Login
                    </Button>
                    <Grid container>
                        <Grid item container justify="center">
                            <Link href="/signup" variant="body2" style={{ color: "#408BD3", fontWeight: 500, padding: 8, margin: 8 }}>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    <div className='sign-line'>
                        or sign in with
                    </div>
                    <Grid container className="auth-grid">
                        <Grid xs={4} sm={4} container justify="center">
                            <GoogleLogin
                                clientId="162844499087-o7lm9gl34lmvbdefkasjb4cu4sm4e71m.apps.googleusercontent.com"
                                onSuccess={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                render={renderProps => (
                                    <button
                                        className="auth-btn"
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                    >
                                        <div className=' p-2 rounded-full '>
                                            <img style={{ height: "28px" }} className="sign-img" src={GoogleLogo} alt="google icon" />
                                        </div>

                                    </button>
                                )}
                            ></GoogleLogin>
                        </Grid>
                        <Grid container xs={4} sm={4} justify="center">
                            <FacebookLogin
                                appId="923168938514989"
                                autoLoad={false}
                                fields="name,email,picture"
                                callback={responseFacebook}
                                render={renderProps => (
                                    <button
                                        className="auth-btn"
                                        onClick={renderProps.onClick}
                                    >
                                        <div className=' p                                           -2 rounded-full '>
                                            <img style={{ height: "43px" }} className="sign-img" src={FBLogo} alt="fb icon" />
                                        </div>

                                    </button>
                                )}
                            />
                        </Grid>
                        <Grid container xs={4} sm={4} justify="center">
                            <AppleLogin
                                clientId={"com.react.apple.login"}
                                redirectURI={"https://redirectUrl.com"}
                                responseType={"code"}
                                responseMode={"query"}
                                usePopup={false}
                                render={renderProps => (
                                    <button
                                        className="auth-btn"
                                        onClick={renderProps.onClick}
                                    >
                                        <div className=' p-2 rounded-full '>
                                            <img style={{ height: "32px" }} className="sign-img" src={AppleLogo} alt="apple icon"/>
                                        </div>

                                    </button>
                                )}
                            />
                        </Grid>
                    </Grid>

</form>
            </Paper>
        </Container>
    )
}

export default LoginForm;
