import { useTheme, makeStyles, AppBar, Toolbar, IconButton, Button, Switch } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function Header(props) {

    const classes = useStyles();
    const theme = useTheme();
    return (
            <AppBar color='inherit' className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuIcon} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <img src={theme.palette.type === 'dark' ? '/images/logo.png' : '/images/logo-dark.png'} alt='youtube logo' className={classes.logo} />
                    <div className={classes.grow} />
                    <Switch value={props.darkMode} onChange={() => props.setDarkMode(!props.darkMode)} className={classes.appBarIcons}/>
                    <IconButton className={classes.appBarIcons} >
                        <VideoCallIcon />
                    </IconButton>
                    <IconButton edge="start" className={classes.appBarIcons} aria-label="menu">
                        <AppsIcon />
                    </IconButton>
                    <IconButton edge="start" className={classes.appBarIcons} aria-label="menu">
                        <MoreVertIcon />
                    </IconButton>
                    <Button
                        variant='outlined'
                        color="secondary"
                        startIcon={<AccountCircleIcon />}
                    >
                        Sign In
                    </Button>
                </Toolbar>
            </AppBar>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.dark
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1
    },
    grow: {
        flexGrow: 1
    },
    appBarIcons: {
        marginRight: theme.spacing(1.5)
    },
    menuIcon: {
        paddingLeft: theme.spacing(1.5),
        marginRight: theme.spacing(2)
    },
    logo: {
        height: 25
    },
}));

export default Header