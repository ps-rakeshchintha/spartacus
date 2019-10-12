import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import FlipIcon from '@material-ui/icons/Flip';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import RotateRightIcon from '@material-ui/icons/RotateRight';


const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        padding: theme.spacing(1),
    },
    formControl: {
        minWidth: "100%"
    },
    subHeading: {
        textAlign: "center",
        minWidth: "100%"
    }
});

class Transform extends React.Component {
    state = {
        presetAspectRatio: 0,
        customAspectRatio: undefined,
        aspectRatio: undefined
    }
    render() {
        const { classes } = this.props;
        return (
            <form className={classes.root} noValidate autoComplete="off">
                <Typography variant="subtitle1" className={classes.subHeading} gutterBottom>Transform</Typography>
                <FlipIcon />
                <RotateLeftIcon />
                <RotateRightIcon />
            </form>
        )
    }
}

export default withStyles(styles)(Transform);