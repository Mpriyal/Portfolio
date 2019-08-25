import React,{Component} from 'react';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme =>  ({
    media: {
        height: 90,
        width: 90
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

                </CardContent>
            </Card>
            </div>
        );
    }
}

export default withStyles(styles)(SkillCard);

