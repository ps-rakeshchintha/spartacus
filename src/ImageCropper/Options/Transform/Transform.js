import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FlipIcon from '@material-ui/icons/Flip';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import Tooltip from '@material-ui/core/Tooltip';

import InputSlider from './InputSlider';

const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        padding: theme.spacing(1),
    },
    centerAlign: {
        textAlign: "center",
        minWidth: "100%"
    },
    flippedVertical: {
        transform: "rotate(90deg)"
    },
    iconButton: {
        color: theme.palette.common.black
    }
});

class Transform extends React.Component {
    minDegree = -360;
    maxDegree = 360
    flipHorizontalClick = () => {
        this.props.toggleFlipHorizontal();
    }
    flipVerticalClick = () => {
        this.props.toggleFlipVertical();
    }
    rotateStep = (step) => {
        let deg = this.props.rotateToDegree + step;
        if(deg >= this.maxDegree){
            deg = 0;
        } else if(deg <= this.minDegree ){
            deg = 0;
        }
        this.props.setRotateToDegree(deg);
    }
    setRotateToDegree = (deg) => {
        this.props.setRotateToDegree(deg);
    }
    render() {
        const { classes } = this.props;
        return (
            <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                <Typography variant="subtitle1" className={classes.centerAlign} gutterBottom>Transform</Typography>
                <Typography>Flip:</Typography>
                <div className={classes.centerAlign} >
                    <Tooltip title="Flip Horizontal">
                        <IconButton onClick={() => this.flipHorizontalClick()} className={classes.iconButton}>
                            <FlipIcon fontSize="large" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Flip Vertical">
                        <IconButton onClick={() => this.flipVerticalClick()} className={classes.iconButton}>
                            <FlipIcon className={classes.flippedVertical} fontSize="large" />
                        </IconButton>
                    </Tooltip>
                </div>
                <Typography>Rotate:</Typography>
                <div className={classes.centerAlign} >
                    <Tooltip title="Rotate Left">
                        <IconButton onClick={() => this.rotateStep(-90)} className={classes.iconButton}>
                            <RotateLeftIcon fontSize="large" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Rotate Right">
                        <IconButton onClick={() => this.rotateStep(90)} className={classes.iconButton}>
                            <RotateRightIcon fontSize="large" />
                        </IconButton>
                    </Tooltip>
                </div>
                <InputSlider min={this.minDegree} max={this.maxDegree} step={10} value={this.props.rotateToDegree} setRotateToDegree={this.setRotateToDegree}/>
            </form>
        )
    }
}

export default withStyles(styles)(Transform);