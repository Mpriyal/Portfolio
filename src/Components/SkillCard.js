import React,{Component} from 'react';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme =>  ({
    root: {
        // width: '100%',
        // display: 'block',
        // marginTop: theme.spacing(15),
        // marginLeft: theme.spacing(90),
    },
    media: {
        height: 90,
        width: 90
    },
    card: {
        // minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    }
});

class SkillCard extends Component {

    constructor(props) {
        super(props);
    }

    render()
    {
        const {classes} = this.props;
        const bull = <span className={classes.bullet}>•</span>;
        return (
            <div className="card-class">
            <Card className={classes.card}>
                <CardContent className="card-content">
                    <CardMedia
                        className={classes.media}
                        image={this.props.info[0]}
                        title={this.props.skill}
                    />
                    <Typography variant="h5" component="h2">
                        {this.props.skill}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {this.props.info[1]}
                    </Typography>
                    {/*<Typography variant="body2" component="p">*/}
                        {/*well meaning and kindly.*/}
                        {/*<br/>*/}
                        {/*{'"a benevolent smile"'}*/}
                    {/*</Typography>*/}
                </CardContent>
                {/*<CardActions>*/}
                    {/*<Button size="small">Learn More</Button>*/}
                {/*</CardActions>*/}
            </Card>
            </div>
        );
    }
}

export default withStyles(styles)(SkillCard);

