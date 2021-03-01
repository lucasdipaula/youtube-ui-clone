import { makeStyles, Box, Toolbar, Typography, Grid } from '@material-ui/core';

function Trending() {

    const classes = useStyles();

    const videos = [
        {
            title: "Drake - Toosie Slide (Official Music Video",
            channel: "Drake",
            viewsNumber: '275 mi views',
            postDate: '10 months ago',
            thumb: 'https://i.ytimg.com/vi/xWggTb45brM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_brlZQcy86erPlYvjjomdzZAsLQ'
        },
        {
            title: "Life in a Day | Official Documentary",
            channel: "Life in a Day",
            viewsNumber: '11 mi views',
            postDate: '3 weeks ago',
            thumb: 'https://i.ytimg.com/vi/vcsSc2iksC0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHipnU9szjFJCJD4ukmGfcX-S6Lw'
        },
        {
            title: "GRÊMIO 0 x 1 PALMEIRAS | MELHORES MOMENTOS",
            channel: "ge",
            viewsNumber: '1 mi views',
            postDate: 'one week ago',
            thumb: 'https://i.ytimg.com/vi/Pi6Rdsl7-ic/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBH3DbOWTKZ6LVAazoDJKa7nIIMVg'
        },
        {
            title: "Chill Study Beats 4 - jazz & lofi hiphop Mix [2017]",
            channel: "Chillhop Music",
            viewsNumber: '24 mi views',
            postDate: '3 years ago',
            thumb: 'https://i.ytimg.com/vi/8iU8LPEa4o0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvPsySEkv5gz638vkKeZP9WPm_CQ'
        },
        {
            title: "FIRST CLEAN of a Big DIRTY Chrysler!",
            channel: "The Detail Geek",
            viewsNumber: '1M Views',
            postDate: '2 days ago',
            thumb: 'https://i.ytimg.com/vi/JgdRJMH3pAE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBS9937k8SLWjuHCY0cjMY8P6p_mQ'
        },
        {
            title: "Avicii - Waiting For Love",
            channel: "Avicii",
            viewsNumber: '812 mi views',
            postDate: '5 years ago',
            thumb: 'https://i.ytimg.com/vi/cHHLHGNpCSA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDAsrP7lXC6tvCO5a1toPWvNc6YtQ'
        },
        {
            title: "2020 EM UMA MÚSICA",
            channel: "Inutilismo",
            viewsNumber: '7 mi views',
            postDate: '2 months ago',
            thumb: 'https://i.ytimg.com/vi/fLpCyU_SHRo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAc2LTs5BM0keJYP0zQCDhBl9ER0Q'
        },
        {
            title: "TOP 10 GOALS | 2018 FIFA World Cup Russia",
            channel: "FIFATV",
            viewsNumber: '70 mi views',
            postDate: '2 years ago',
            thumb: 'https://i.ytimg.com/vi/Vw34wMAqWzc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpsoNg-4Hryit8hq645ZgcuK9idA'
        }
    ]

    return (
        <Box p={8}>
            <Toolbar />
            <Typography
                variant='h5'
                color='textPrimary'
                className={classes.trendingTitle}
            >
                Trending
            </Typography>

            <Grid container spacing={4}>
                {
                    videos.map((item) => {
                        return(
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <Box>
                                    <img
                                        style={{ width: '100% '}}
                                        alt={item.title}
                                        src={item.thumb}
                                    />
                                </Box>
                                <Box>
                                    <Typography
                                        style={{ fontWeight: 600 }}
                                        gutterBottom
                                        variant='body1'
                                        color='textPrimary'
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        display='block'
                                        variant='body2'
                                        color='textSecondary'
                                    >
                                        {item.channel}
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        color='textSecondary'
                                    >
                                        {`${item.viewsNumber} - ${item.postDate}`}
                                    </Typography>
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    trendingTitle: {
        fontWeight: 600, 
        paddingBottom: theme.spacing(3.5)
    }
}));

export default Trending