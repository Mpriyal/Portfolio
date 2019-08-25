import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
    {
        url: 'https://s3.amazonaws.com/staticwebsiteaman/edu.jpg',
        title: 'EduSphere',
        desc: "Course Management system",
        width: '30%',
        gitLink: "https://github.com/Mpriyal/webdev-summer1-2018-priyalmittal-react"
    },
    {
        url: 'https://s3.amazonaws.com/staticwebsiteaman/dota1.jpg',
        title: 'Dota-Science',
        desc: "Team Recommendation System",
        width: '30%',
        gitLink: "https://github.com/Mpriyal/Dota-Science"
    },
    {
        url: 'https://s3.amazonaws.com/staticwebsiteaman/2.jpg',
        title: 'Travista',
        desc: "Travel Management system",
        width: '30%',
        gitLink: "https://github.com/Mpriyal/Travista-TripManagementSystem-FrontEnd"
    },
    {
        url: 'https://s3.amazonaws.com/staticwebsiteaman/gulp.png',
        title: 'Gulp-It',
        desc: "Restaurant Review system",
        width: '30%',
        gitLink: "https://github.com/Mpriyal/Gulp-It-RestaurantReviewSystem"
    },
    {
        url: 'https://s3.amazonaws.com/staticwebsiteaman/search.jpg',
        title: 'Search Engine',
        desc: "Search Engine",
        width: '30%',
        gitLink: "https://github.com/Mpriyal/Search-Engine"
    },
    {
        url: 'https://s3.amazonaws.com/staticwebsiteaman/portfolio.png',
        title: 'Portfolio',
        desc: "Personal website",
        width: '30%',
        gitLink: "https://github.com/Mpriyal/Portfolio"
    },
];

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

export default function ButtonBases() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {images.map(image => (
                <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                        margin: 6
                    }}
                    href={image.gitLink}

                >
          <span
              className={classes.imageSrc}
              style={{
                  backgroundImage: `url(${image.url})`,
              }}
          />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
            <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
            >
              {image.title}
                <span className={classes.imageMarked} />
            </Typography>
          </span>
                </ButtonBase>
            ))}
        </div>
    );
}
