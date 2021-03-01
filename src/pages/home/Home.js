import React from 'react';
import {Box, makeStyles} from '@material-ui/core';

import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';
import Trending from '../../components/trending/Trending';

function Home(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
            <Box display={'flex'}>
                <Menu />
                <Trending />
            </Box>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        backgroundColor: theme.palette.background.dark
    },
}));

export default Home;