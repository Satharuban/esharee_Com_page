import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import AppleLogin from 'react-apple-login';
import GoogleLogo from '../../assets/google-icon.svg';
import FBLogo from '../../assets/fb-logo.png';
import AppleLogo from '../../assets//apple-logo.png';
import ImageIcon from '@material-ui/icons/Image';
import MovieIcon from '@material-ui/icons/Movie';
import AttachmentIcon from '@material-ui/icons/Attachment';
import Attachment from './modal';
import ImageUploader from './fileModal';
import Video from './videoModal'
import { useStyles } from '../../components/styles';
import {
    Grid,
    FormControlLabel,
    Checkbox,
    Button,
    CssBaseline,
    InputBase,
    Paper,
    Container,
    Typography,
    IconButton
} from '@material-ui/core';
import axios from 'axios';
import { showErrMsg, showSuccessMsg } from '../utils/Notification/Notification';
import { dispatchLogin } from '../../redux/actions/authAction';
import { useDispatch } from 'react-redux';
import ImageUploder from './ImageUpload/imageupload'

const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}

const AddCard = () => {

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
    const handleMobileMenuClose = () => {
       <ImageUploder/>
      };
    
    const classes = useStyles();

    return (

        <Paper elevation={0} style={{ margin: 10, borderRadius: 10 }}  >
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid item sm={7}>

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
                <Grid item sm={3}  container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
                spacing={2}>
                    
                {/* <IconButton onclick={handleMobileMenuClose}><AttachmentIcon/></IconButton> */}
                <Grid item></Grid>

<Grid item><ImageUploader/></Grid><Grid item><Attachment/></Grid>
<Grid item><Video/></Grid>


                 {/* <IconButton><ImageIcon/></IconButton>
                 <IconButton><MovieIcon/></IconButton> */}
<div ></div>

                </Grid>
                {/* <Grid item sm={1}>
                <IconButton><MovieIcon/></IconButton>


                   
                </Grid> */}
                <Grid item Container justifyContent="flex-end"
                alignItems="flex-end"  sm={2}>
                    <Button style={{
                        display: 'flex',
                        borderRadius: 10, borderColor: "re#CF0505d", width: 'auto', color: "white", height: 35, fontSize: 15, margin: "1px 5px 1px 5px", padding: '5px 15px 5px 15px',
                        fontWeight: 400,
                        border: " 0px solid transparent",
                        backgroundColor: "#CF0505",
                        '&:hover': {
                            borderColor: '#0062cc',
                            boxShadow: "1px 1px 10px 10px #fff2f2",
                        },
                    }}>
                        Post
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default AddCard;
