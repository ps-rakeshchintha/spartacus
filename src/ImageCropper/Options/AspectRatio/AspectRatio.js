import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Crop169Icon from '@material-ui/icons/Crop169';
import Crop32Icon from '@material-ui/icons/Crop32';
import Crop54Icon from '@material-ui/icons/Crop54';
import Crop75Icon from '@material-ui/icons/Crop75';
import CropSquareIcon from '@material-ui/icons/CropSquare';
import CropFreeIcon from '@material-ui/icons/CropFree';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        padding: theme.spacing(1),
    },
    iconButton: {
        width: 74
    },
    buttonSelected: {
        color: theme.palette.primary.main
    },
    subHeading: {
        textAlign: "center",
        minWidth: "100%"
    }
});

class AspectRatio extends React.Component {
    setAspectRatio = (aspectRatio) => {
        this.props.onAspectRatioChange(aspectRatio);
    }
    getSelectedState = (btnValue) => {
        if (btnValue === this.props.aspectRatio) {
            return this.props.classes.buttonSelected
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <form className={classes.root} noValidate autoComplete="off">
                <Typography variant="subtitle1" className={classes.subHeading} gutterBottom>Aspect Ratio</Typography>
                <Button className={`${classes.iconButton} ${this.getSelectedState(undefined)}`} size="small" onClick={() => this.setAspectRatio(undefined)}>
                    <CropFreeIcon fontSize="large" />
                    Free
                </Button>
                <Button className={`${classes.iconButton} ${this.getSelectedState(16 / 9)}`} size="small" onClick={() => this.setAspectRatio(16 / 9)}>
                    <Crop169Icon fontSize="large" />
                    16:9
                </Button>
                <Button className={`${classes.iconButton} ${this.getSelectedState(3 / 2)}`} size="small" onClick={() => this.setAspectRatio(3 / 2)}>
                    <Crop32Icon fontSize="large" />
                    3:2
                </Button>
                <Button className={`${classes.iconButton} ${this.getSelectedState(5 / 4)}`} size="small" onClick={() => this.setAspectRatio(5 / 4)}>
                    <Crop54Icon fontSize="large" />
                    5:4
                </Button>
                <Button className={`${classes.iconButton} ${this.getSelectedState(7 / 5)}`} size="small" onClick={() => this.setAspectRatio(7 / 5)}>
                    <Crop75Icon fontSize="large" />
                    7:5
                </Button>
                <Button className={`${classes.iconButton} ${this.getSelectedState(1)}`} size="small" onClick={() => this.setAspectRatio(1)}>
                    <CropSquareIcon fontSize="large" />
                    1:1
                </Button>
            </form>
        )
    }
}

export default withStyles(styles)(AspectRatio);