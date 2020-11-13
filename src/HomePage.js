import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreVert from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';

function HomePage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar color='inherit' className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuIcon} color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <img src='/images/black-logo.png' alt='youtube logo' className={classes.logo}/>
                    <div className={classes.grow}/>
                    <IconButton className={classes.appBarIcons} color="inherit" >
                    <VideoCallIcon />
                    </IconButton>
                    <IconButton edge="start" className={classes.appBarIcons} color="inherit" aria-label="menu">
                    <AppsIcon />
                    </IconButton>
                    <IconButton edge="start" className={classes.appBarIcons} color="inherit" aria-label="menu">
                    <MoreVert />
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
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    },
    appBar: {
        boxShadow: 'none'
    },
    grow: {
        flexGrow: 1
    },
    appBarIcons: {
        paddingRight: theme.spacing(3)
    },
    menuIcon: {
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(3)
    }, 
    logo: {
        height: 25
    }
  }));

export default HomePage;