import React from "react";
import Typography from '@material-ui/core/Typography';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from "@material-ui/core/styles";

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

class Zoom extends React.Component {
    zoomOut = () => {
        this.props.zoomOut();
    }  
    zoomIn = () => {
        this.props.zoomIn();
    }
    render() {
        const { classes } = this.props;
        return (
            <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                <Typography variant="subtitle1" className={classes.centerAlign} gutterBottom>Zoom</Typography>
                <div className={classes.centerAlign} >
                    <Tooltip title="Zoom Out">
                        <IconButton onClick={() => this.zoomOut()} className={classes.iconButton}>
                            <ZoomOutIcon fontSize="large" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Zoom In">
                        <IconButton onClick={() => this.zoomIn()} className={classes.iconButton}>
                            <ZoomInIcon fontSize="large" />
                        </IconButton>
                    </Tooltip>
                </div>
            </form>
        )
    }
}

export default withStyles(styles)(Zoom);