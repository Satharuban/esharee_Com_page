
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import AppleLogin from 'react-apple-login';
import GoogleLogo from '../../assets/google-icon.svg';
import FBLogo from '../../assets/fb-logo.png';
import AppleLogo from '../../assets//apple-logo.png';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Navbar from '../navbar/navbar'

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
< div style={{marginLeft:60,marginRight:60}}>
<Navbar/><br/> <br/> <br/><br/> 

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
    <Grid item style={{ fontSize: 15, fontWeight: 700, margin: 10 }}> 
    <Typography
                        variant="caption"
                        
                        gutterBottom
                        style={{ fontSize: 15, fontWeight: 700, margin: 20 }}
                    >
                        {" "}
                        Comments
                    </Typography> 
                    </Grid>

                </Grid>
           
        </Paper>


        <Typography
                                variant="caption"
                                display="block"
                                gutterBottom
                                style={{ fontSize: 15, fontWeight: 700, padding: 5 }}
                            >
                                {" "}
                                Answers
                            </Typography>



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
                        It's very easy  </Typography>
                </Grid>
            </Grid>
            {/* <Divider />
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

                </Grid> */}
           
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
                        It's very easy  </Typography>
                </Grid>
            </Grid>
            {/* <Divider />
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

                </Grid> */}
           
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
                        It's very easy  </Typography>
                </Grid>
            </Grid>
            {/* <Divider />
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

                </Grid> */}
           
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
                        It's very easy  </Typography>
                </Grid>
            </Grid>
            {/* <Divider />
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

                </Grid> */}
           
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
                        It's very easy  </Typography>
                </Grid>
            </Grid>
            {/* <Divider />
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

                </Grid> */}
           
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
                        It's very easy  </Typography>
                </Grid>
            </Grid>
            {/* <Divider />
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

                </Grid> */}
           
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
                        It's very easy  </Typography>
                </Grid>
            </Grid>
            {/* <Divider />
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

                </Grid> */}
           
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
                        It's very easy  </Typography>
                </Grid>
            </Grid>
            {/* <Divider />
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

                </Grid> */}
           
        </Paper>      
v <Paper elevation={0} style={{ margin: 10, borderRadius: 10,boxShadow: "1px 1px 10px 1px #DAE0E6", }}  >
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
                        It's very easy  </Typography>
                </Grid>
            </Grid>
            {/* <Divider />
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

                </Grid> */}
           
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
                        It's very easy  </Typography>
                </Grid>
            </Grid>
            {/* <Divider />
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

                </Grid> */}
           
        </Paper>      










</div>  
    )
}

export default PostCard;
