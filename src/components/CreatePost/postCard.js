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

        <Paper elevation={0}  style={{margin:10 ,borderRadius:10}}  >
            <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center">
                <Grid item>

                    <InputBase
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        placeholder="Write a Post"
                        name="email"
                        autoComplete="email"
                        autoFocus

                        value={email}
                        onChange={handleChangeInput}
                        style={{ width: "100%", backgroundColor: '#EFF1F7', borderRadius: 10, padding: 10, margin: 10 }}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default PostCard;
