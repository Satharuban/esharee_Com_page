import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar ,Button} from '@material-ui/core/';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Logo from '../../assets/navbar/EShareLogoNoBG.png'
import { useSelector } from 'react-redux';
import MenuItems from './Menu';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '200%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none', 
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    }, 
   
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  button: {
    display: 'flex',
    borderRadius: 10, borderColor: "re#CF0505d", width: 'auto', color: "white", height: 35, fontSize: 15, margin: "1px 5px 1px 5px", padding: '5px 15px 5px 15px',
    fontWeight: 800,
    border: " 0px solid transparent",
    backgroundColor: "#CF0505",
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }, '&:hover': {
      borderColor: '#0062cc',
      boxShadow: "1px 1px 10px 10px #fff2f2",
    },
  },
  buttonLogin: {
    display: 'flex',
    borderRadius: 10, borderColor: "#CF0505", width: 'auto', color: "#CF0505", height: 35, fontSize: 15, margin: "1px 5px 1px 5px", padding: '5px 15px 5px 15px',
    fontWeight: 800,
    border: " 2px solid #CF0505",
    backgroundColor: "transparent",
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }, '&:hover': {
      borderColor: '#CF0505',
      boxShadow: "1px 1px 10px 10px #fff2f2",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const auth = useSelector(state => state.auth)

  const { isLogged } = auth

  const userLink = () => {
    return <MenuItems />
  }
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar elevation={1} position="fixed" style={{ backgroundColor: "white", boxShadow: "1px 1px 10px 10px #dedcdc" }}>
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
                      <img src={Logo} alt="logo" height="35px" />

          <Typography className={classes.title} variant="h6" noWrap>
            {/* <img src={Logo} alt="logo" height="35px" /> */}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon} >
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="black"
                aria-label="open drawer"
                style={{ color: "black" }}
              >
                <SearchIcon />

              </IconButton>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              style={{ boxShadow: "1px 1px 10px 5px #dedcdc", borderRadius: 10, color: "black" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
           
          {
              isLogged
                ? userLink()
                :          <div style={{display:"flex"}}>   <Button style={{
          
             
                }} href="/login"  className={classes.buttonLogin}>
                  Log In
                </Button>
                <Button  className={classes.button}>
                  Sign Up
                </Button></div>
            }

           

            {/* <IconButton aria-label="show 4 new mails" color="inherit" style={{ color: "black" }}>
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit" style={{ color: "black" }}>
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              style={{ color: "black" }}
            >
              <AccountCircle />
            </IconButton> */}
          </div>
          <div className={classes.sectionMobile}>
            {isLogged ? userLink() : null}
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
