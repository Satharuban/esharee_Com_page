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
    Typography, Avatar
} from '@material-ui/core';
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

const PostCard = () => {

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
<>
        <Paper elevation={0} style={{ margin: 10, borderRadius: 10,boxShadow: "1px 1px 10px 1px #DAE0E6", }}  >
            <Grid container
                direction="column"
                justifyContent=""
                alignItems="">
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        style={{  padding:10 }}
                    >

                        <Grid item style={{ marginLeft: 2 }} align="left"  >
                            <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />

                        </Grid>
                        <Grid item  >
                            <Typography
                                variant="caption"
                                display="block"
                                gutterBottom
                                style={{ fontSize: 15, fontWeight: 700, padding: 5 }}
                            >
                                {" "}
                                Ajai Wiliam
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography
                        variant="caption"
                        display="block"
                        align='justify'
                        gutterBottom
                        style={{ fontSize: 15, fontWeight: 700, padding: 10 }}
                    >
                        {" "}
                        I was wondering if anyone has noticed this as well. I come from an administrative world where mistakes are often chastised and documents going to the client or internal cirulation must be fool proof. Like, 9 superior officers of QA fool proof (public sector bureaucracy/ private sector consulting). People who make mistakes sometimes get reamed pretty hard.

                        In my time learning programming, I realized there's the importance of automated testing, QA, continuous improvement, and code reviews. Even then, sometimes unforseen edge cases appear. Sometimes the dependencies change in your libraries and it ends up screwing everything up. Sometimes the user breaks the product. All of these are undesirable but not totally out of the equation - and one of hardest things I've learned from transitioning in to programming is that, for the most part its okay. Nothing can be totally perfect and while repeated mistakes that are the same are worth concern,
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
        <Paper elevation={0} style={{ margin: 10, borderRadius: 10,boxShadow: "1px 1px 10px 1px #DAE0E6", }}  >
            <Grid container
                direction="column"
                justifyContent=""
                alignItems="">
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        style={{  padding:10 }}
                    >

                        <Grid item style={{ marginLeft: 2 }} align="left"  >
                            <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />

                        </Grid>
                        <Grid item  >
                            <Typography
                                variant="caption"
                                display="block"
                                gutterBottom
                                style={{ fontSize: 15, fontWeight: 700, padding: 5 }}
                            >
                                {" "}
                                Ajai Wiliam
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography
                        variant="caption"
                        display="block"
                        align='justify'
                        gutterBottom
                        style={{ fontSize: 15, fontWeight: 700, padding: 10 }}
                    >
                        {" "}
                        I was wondering if anyone has noticed this as well. I come from an administrative world where mistakes are often chastised and documents going to the client or internal cirulation must be fool proof. Like, 9 superior officers of QA fool proof (public sector bureaucracy/ private sector consulting). People who make mistakes sometimes get reamed pretty hard.

                        In my time learning programming, I realized there's the importance of automated testing, QA, continuous improvement, and code reviews. Even then, sometimes unforseen edge cases appear. Sometimes the dependencies change in your libraries and it ends up screwing everything up. Sometimes the user breaks the product. All of these are undesirable but not totally out of the equation - and one of hardest things I've learned from transitioning in to programming is that, for the most part its okay. Nothing can be totally perfect and while repeated mistakes that are the same are worth concern,
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
        <Paper elevation={0} style={{ margin: 10, borderRadius: 10,boxShadow: "1px 1px 10px 1px #DAE0E6", }}  >
            <Grid container
                direction="column"
                justifyContent=""
                alignItems="">
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        style={{  padding:10 }}
                    >

                        <Grid item style={{ marginLeft: 2 }} align="left"  >
                            <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />

                        </Grid>
                        <Grid item  >
                            <Typography
                                variant="caption"
                                display="block"
                                gutterBottom
                                style={{ fontSize: 15, fontWeight: 700, padding: 5 }}
                            >
                                {" "}
                                Ajai Wiliam
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography
                        variant="caption"
                        display="block"
                        align='justify'
                        gutterBottom
                        style={{ fontSize: 15, fontWeight: 700, padding: 10 }}
                    >
                        {" "}
                        I was wondering if anyone has noticed this as well. I come from an administrative world where mistakes are often chastised and documents going to the client or internal cirulation must be fool proof. Like, 9 superior officers of QA fool proof (public sector bureaucracy/ private sector consulting). People who make mistakes sometimes get reamed pretty hard.

                        In my time learning programming, I realized there's the importance of automated testing, QA, continuous improvement, and code reviews. Even then, sometimes unforseen edge cases appear. Sometimes the dependencies change in your libraries and it ends up screwing everything up. Sometimes the user breaks the product. All of these are undesirable but not totally out of the equation - and one of hardest things I've learned from transitioning in to programming is that, for the most part its okay. Nothing can be totally perfect and while repeated mistakes that are the same are worth concern,
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
        <Paper elevation={0} style={{ margin: 10, borderRadius: 10,boxShadow: "1px 1px 10px 1px #DAE0E6", }}  >
            <Grid container
                direction="column"
                justifyContent=""
                alignItems="">
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        style={{  padding:10 }}
                    >

                        <Grid item style={{ marginLeft: 2 }} align="left"  >
                            <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />

                        </Grid>
                        <Grid item  >
                            <Typography
                                variant="caption"
                                display="block"
                                gutterBottom
                                style={{ fontSize: 15, fontWeight: 700, padding: 5 }}
                            >
                                {" "}
                                Ajai Wiliam
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography
                        variant="caption"
                        display="block"
                        align='justify'
                        gutterBottom
                        style={{ fontSize: 15, fontWeight: 700, padding: 10 }}
                    >
                        {" "}
                        I was wondering if anyone has noticed this as well. I come from an administrative world where mistakes are often chastised and documents going to the client or internal cirulation must be fool proof. Like, 9 superior officers of QA fool proof (public sector bureaucracy/ private sector consulting). People who make mistakes sometimes get reamed pretty hard.

                        In my time learning programming, I realized there's the importance of automated testing, QA, continuous improvement, and code reviews. Even then, sometimes unforseen edge cases appear. Sometimes the dependencies change in your libraries and it ends up screwing everything up. Sometimes the user breaks the product. All of these are undesirable but not totally out of the equation - and one of hardest things I've learned from transitioning in to programming is that, for the most part its okay. Nothing can be totally perfect and while repeated mistakes that are the same are worth concern,
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
        <Paper elevation={0} style={{ margin: 10, borderRadius: 10,boxShadow: "1px 1px 10px 1px #DAE0E6", }}  >
            <Grid container
                direction="column"
                justifyContent=""
                alignItems="">
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        style={{  padding:10 }}
                    >

                        <Grid item style={{ marginLeft: 2 }} align="left"  >
                            <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />

                        </Grid>
                        <Grid item  >
                            <Typography
                                variant="caption"
                                display="block"
                                gutterBottom
                                style={{ fontSize: 15, fontWeight: 700, padding: 5 }}
                            >
                                {" "}
                                Ajai Wiliam
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography
                        variant="caption"
                        display="block"
                        align='justify'
                        gutterBottom
                        style={{ fontSize: 15, fontWeight: 700, padding: 10 }}
                    >
                        {" "}
                        I was wondering if anyone has noticed this as well. I come from an administrative world where mistakes are often chastised and documents going to the client or internal cirulation must be fool proof. Like, 9 superior officers of QA fool proof (public sector bureaucracy/ private sector consulting). People who make mistakes sometimes get reamed pretty hard.

                        In my time learning programming, I realized there's the importance of automated testing, QA, continuous improvement, and code reviews. Even then, sometimes unforseen edge cases appear. Sometimes the dependencies change in your libraries and it ends up screwing everything up. Sometimes the user breaks the product. All of these are undesirable but not totally out of the equation - and one of hardest things I've learned from transitioning in to programming is that, for the most part its okay. Nothing can be totally perfect and while repeated mistakes that are the same are worth concern,
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
        <Paper elevation={0} style={{ margin: 10, borderRadius: 10,boxShadow: "1px 1px 10px 1px #DAE0E6", }}  >
            <Grid container
                direction="column"
                justifyContent=""
                alignItems="">
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        style={{  padding:10 }}
                    >

                        <Grid item style={{ marginLeft: 2 }} align="left"  >
                            <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />

                        </Grid>
                        <Grid item  >
                            <Typography
                                variant="caption"
                                display="block"
                                gutterBottom
                                style={{ fontSize: 15, fontWeight: 700, padding: 5 }}
                            >
                                {" "}
                                Ajai Wiliam
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography
                        variant="caption"
                        display="block"
                        align='justify'
                        gutterBottom
                        style={{ fontSize: 15, fontWeight: 700, padding: 10 }}
                    >
                        {" "}
                        I was wondering if anyone has noticed this as well. I come from an administrative world where mistakes are often chastised and documents going to the client or internal cirulation must be fool proof. Like, 9 superior officers of QA fool proof (public sector bureaucracy/ private sector consulting). People who make mistakes sometimes get reamed pretty hard.

                        In my time learning programming, I realized there's the importance of automated testing, QA, continuous improvement, and code reviews. Even then, sometimes unforseen edge cases appear. Sometimes the dependencies change in your libraries and it ends up screwing everything up. Sometimes the user breaks the product. All of these are undesirable but not totally out of the equation - and one of hardest things I've learned from transitioning in to programming is that, for the most part its okay. Nothing can be totally perfect and while repeated mistakes that are the same are worth concern,
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
       
      </>  
    )
}

export default PostCard;
