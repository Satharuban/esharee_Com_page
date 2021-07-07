import React from 'react';
import {Dialog,DialogContent,DialogContentText,Slide} from '@material-ui/core';
import LoginForm from './LoginForm';
import './LoginModal.css';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Login() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="login-modal">
            <p variant="outlined" color="primary" onClick={handleClickOpen}>
            <i
              className="far fa-heart"
              style={{
                color: "#fc036b",
                fontSize: 18,
              }}
            ></i>
            <span style={{ textDecoration: "underline", paddingLeft: 5 }}>save</span>
            </p>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <LoginForm/>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Login;
