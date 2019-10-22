import React from "react";
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
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
    radioBtnGroup: {
        flexDirection: "row"
    },
});

class Output extends React.Component {
    state = {
        outputType: "percent",
        outputWidth: 100,
        outputHeight: 100,
        maintainAspectRatio: true
    }
    handleOutputType = (e) => {
        this.setState({
            outputType: e.target.value
        })
        if(e.target.value === "px"){
            this.setState({
                outputHeight: this.props.cropHeight,
                outputWidth: this.props.cropWidth
            })
        } else {
            this.setState({
                outputHeight: 100,
                outputWidth: 100
            })
        }
    }
    componentDidUpdate(prevProps, prevSate) {
        if(this.state.outputType === "px" && (this.props.cropHeight !== prevProps.cropHeight || this.props.cropWidth !== prevProps.cropWidth)){
            this.setState({
                outputHeight: this.props.cropHeight,
                outputWidth: this.props.cropWidth
            })
        }
    }
    handleWidthChange = (e) => {
        let value = e.target.value ? Number(e.target.value) : null;
        if(this.state.maintainAspectRatio){
            if(this.state.outputType === "percent"){
                this.setState({
                    outputWidth: value,
                    outputHeight: value
                })
            }
        } else {
            this.setState({
                outputWidth: value
            })
        }
    }
    handleHeightChange = (e) => {
        let value = e.target.value ? Number(e.target.value) : null;
        if(this.state.maintainAspectRatio){
            if(this.state.outputType === "percent"){
                this.setState({
                    outputWidth: value,
                    outputHeight: value
                })
            }
        } else {
            this.setState({
                outputHeight: value
            })
        }
    }
    handleAspectRatioSetting = (e) => {
        this.setState({
            maintainAspectRatio: e.target.checked
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                <Typography variant="subtitle1" className={classes.centerAlign} gutterBottom>Output</Typography>
                <div>
                    <FormControl component="fieldset">
                        <Typography>By:</Typography>
                        <RadioGroup className={classes.radioBtnGroup} aria-label="gender" name="gender1" value={this.state.outputType} onChange={this.handleOutputType}>
                            <FormControlLabel value="percent" control={<Radio color="primary" />} label="%" />
                            <FormControlLabel value="px" control={<Radio color="primary" />} label="px" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className={classes.centerAlign} >
                    <TextField
                        id="image-width"
                        label="Width"
                        value={this.state.outputWidth}
                        onChange={this.handleWidthChange}
                        margin="dense"
                        type="number"
                    />
                    <TextField
                        id="image-height"
                        label="Height"
                        value={this.state.outputHeight}
                        onChange={this.handleHeightChange}
                        margin="dense"
                        type="number"
                    />

                    <FormControlLabel
                        control={
                            <Switch
                                checked={this.state.maintainAspectRatio}
                                onChange={this.handleAspectRatioSetting}
                                value="checked"
                                color="primary"
                            />
                        }
                        labelPlacement="start"
                        label="Maintain Aspect Ratio"
                    />
                </div>
            </form>
        )
    }
}

export default withStyles(styles)(Output);