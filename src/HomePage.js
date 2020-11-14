import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';



function HomePage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar color='inherit' className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuIcon} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <img src='/images/black-logo.png' alt='youtube logo' className={classes.logo} />
                    <div className={classes.grow} />
                    <IconButton className={classes.appBarIcons} color="inherit" >
                        <VideoCallIcon />
                    </IconButton>
                    <IconButton edge="start" className={classes.appBarIcons} color="inherit" aria-label="menu">
                        <AppsIcon />
                    </IconButton>
                    <IconButton edge="start" className={classes.appBarIcons} color="inherit" aria-label="menu">
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
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        <ListItem
                            button
                            classes={{
                                root: classes.listItem
                            }}
                        >
                            <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText
                                }}
                                primary={"Home"}
                            />
                        </ListItem>
                        <ListItem
                            button
                            classes={{
                                root: classes.listItem
                            }}
                        >
                            <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText
                                }}
                                primary={"Trending"}
                            />
                        </ListItem>
                        <ListItem
                            button
                            classes={{
                                root: classes.listItem
                            }}
                        >
                            <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText
                                }}
                                primary={"Subscriptions"}
                            />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem
                            button
                            classes={{
                                root: classes.listItem
                            }}
                        >
                            <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText
                                }}
                                primary={"Home"}
                            />
                        </ListItem>
                        <ListItem
                            button
                            classes={{
                                root: classes.listItem
                            }}
                        >
                            <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.listItemText
                                }}
                                primary={"Trending"}
                            />
                        </ListItem>
                    </List>
                    <Divider />
                    <Box p={2.5}>
                        <Typography variant='body2'>
                            Sign in to like videos, comment, and subscribe
                        </Typography>
                        <Box mt={2}>
                            <Button
                                variant='outlined'
                                color="secondary"
                                startIcon={<AccountCircleIcon />}
                            >
                                Sign In
                            </Button>
                        </Box>
                    </Box>
                </div>
            </Drawer>
        </div>
    );
}


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1
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
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none'
    },
    listItemText: {
        fontSize: 14
    },
    listItem: {
        paddingTop: 4,
        paddingBottom: 4
    }
}));

export default HomePage;