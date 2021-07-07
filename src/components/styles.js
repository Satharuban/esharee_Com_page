import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  //   marginTop: theme.spacing(8),
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  // },
  paper: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor:" #DAE0E6",
    boxShadow: "1px 1px 10px 1px #DAE0E6",
    borderRadius:10,
    '&:hover': {
    
     border: "none",
     boxShadow: "1px 1px 10px 10px #DAE0E6",
    },
     
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    
    background: "linear-gradient(90deg, rgba(237,131,131,1) 0%, rgba(238,79,79,1) 35%, rgba(207,5,5,1) 100%)"
  },
}));