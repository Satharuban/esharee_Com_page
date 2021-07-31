import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal,IconButton} from '@material-ui/core/';
import AttachmentIcon from '@material-ui/icons/Attachment';
import MovieIcon from '@material-ui/icons/Movie';
import Video from './vodeo'
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 700,
    backgroundColor: theme.palette.background.paper,
    border: '0px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    marginTop:30,
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>


<Video/>

    </div>
  );

  return (
    <div>
      <button type="button" style={{
              borderRadius: 10, borderColor: "#CF0505", width: 'auto', color: "#CF0505", height: 35, fontSize: 13, 
              fontWeight: 800,
              border: " 0px solid #CF0505",
              backgroundColor: "transparent",
             }}onClick={handleOpen}>
      <MovieIcon/>
      </button>
      {/* <button type="button" onclick={handleOpen}><AttachmentIcon/></button> */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
