import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import AppleLogin from 'react-apple-login';
import GoogleLogo from '../../assets/google-icon.svg';
import FBLogo from '../../assets/fb-logo.png';
import AppleLogo from '../../assets//apple-logo.png';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

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
    Divider,
    Typography, Avatar, IconButton
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
                        I need to share my old car. Anyone help me?  </Typography>
                </Grid>
            </Grid>
            <Divider />
            <Grid container
                direction="row"
                justifyContent=""
                alignItems="">
<Grid item sm={1}> <IconButton><ThumbUpAltIcon/></IconButton> 
    </Grid>
    <Grid item style={{ fontSize: 15, fontWeight: 700, margin: 10 }}> <Typography
                        variant="caption"
                        
                        gutterBottom
                        style={{ fontSize: 15, fontWeight: 700, margin: 20 }}
                    >
                        {" "}
                        Comments
                    </Typography> </Grid>

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
                            <Avatar alt="Remy Sharp" src="https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg"/>

                        </Grid>
                        <Grid item  >
                            <Typography
                                variant="caption"
                                display="block"
                                gutterBottom
                                style={{ fontSize: 15, fontWeight: 700, padding: 5 }}
                            >
                                {" "}
William Smith
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
                        style={{ fontSize: 15, fontWeight: 100, padding: 10 }}
                    >
                        {" "}
                        need to share my new car. Anyone help me? 
                    </Typography>
                                         <img width="600px" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F960x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349"/>

                </Grid>
            </Grid>
            <Divider />
            <Grid container
                direction="row"
                justifyContent=""
                alignItems="">
<Grid item sm={1}> <IconButton><ThumbUpAltIcon/></IconButton> 
    </Grid>
    <Grid item style={{ fontSize: 15, fontWeight: 700, margin: 10 }}> <Typography
                        variant="caption"
                        
                        gutterBottom
                        style={{ fontSize: 15, fontWeight: 700, margin: 20 }}
                    >
                        {" "}
                        Comments
                    </Typography> </Grid>

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
                            <Avatar alt="Remy Sharp" src="https://image.shutterstock.com/image-vector/face-expression-man-neutral-calm-260nw-671583388.jpg" />

                        </Grid>
                        <Grid item  >
                            <Typography
                                variant="caption"
                                display="block"
                                gutterBottom
                                style={{ fontSize: 15, fontWeight: 700, padding: 5 }}
                            >
                                {" "}
                                Will John
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
                        style={{ fontSize: 15, fontWeight: 100, padding: 10 }}
                    >
                        {" "}
                                                need to share My new home for rent,. Anyone help me? 

                    </Typography>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/eZ1-OZKN1EM?start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  
                  
                </Grid>
            </Grid> <Divider />
            <Grid container
                direction="row"
                justifyContent=""
                alignItems="">
<Grid item sm={1}> <IconButton><ThumbUpAltIcon/></IconButton> 
    </Grid>
    <Grid item style={{ fontSize: 15, fontWeight: 700, margin: 10 }}> <Typography
                        variant="caption"
                        
                        gutterBottom
                        style={{ fontSize: 15, fontWeight: 700, margin: 20 }}
                    >
                        {" "}
                        Comments
                    </Typography> </Grid>

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
                        need to share my new car. Anyone help me? 
    </Typography>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dip_8dmrcaU?start=20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Grid>
            </Grid>
            <Divider />
            <Grid container
                direction="row"
                justifyContent=""
                alignItems="">
<Grid item sm={1}> <IconButton><ThumbUpAltIcon/></IconButton> 
    </Grid>
    <Grid item style={{ fontSize: 15, fontWeight: 700, margin: 10 }}> <Typography
                        variant="caption"
                        
                        gutterBottom
                        style={{ fontSize: 15, fontWeight: 700, margin: 20 }}
                    >
                        {" "}
                        Comments
                    </Typography> </Grid>

                </Grid></Paper>
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
                        </Typography>
                    <iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
                </Grid>
            </Grid>
            <Divider />
            <Grid container
                direction="row"
                justifyContent=""
                alignItems="">
<Grid item sm={1}> <IconButton><ThumbUpAltIcon/></IconButton> 
    </Grid>
    <Grid item style={{ fontSize: 15, fontWeight: 700, margin: 10 }}> <Typography
                        variant="caption"
                        
                        gutterBottom
                        style={{ fontSize: 15, fontWeight: 700, margin: 20 }}
                    >
                        {" "}
                        Comments
                    </Typography> </Grid>

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
                        style={{ fontSize: 15, fontWeight: 100, padding: 10 }}
                    >
                        {" "}
                        need to share my new car. Anyone help me? 

                    </Typography>
                                         <img width="600px" src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"/>

                </Grid>
            </Grid>
            <Divider />
            <Grid container
                direction="row"
                justifyContent=""
                alignItems="">
<Grid item sm={1}> <IconButton><ThumbUpAltIcon/></IconButton> 
    </Grid>
    <Grid item style={{ fontSize: 15, fontWeight: 700, margin: 10 }}> <Typography
                        variant="caption"
                        
                        gutterBottom
                        style={{ fontSize: 15, fontWeight: 700, margin: 20 }}
                    >
                        {" "}
                        Comments
                    </Typography> </Grid>

                </Grid> 
                </Paper>
</>  
    )
}

export default PostCard;
