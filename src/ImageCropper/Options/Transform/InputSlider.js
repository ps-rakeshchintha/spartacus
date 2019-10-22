import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import CropRotateIcon from '@material-ui/icons/CropRotate';

const styles = theme => ({
  root: {
    width: '100%',
  },
  input: {
    width: 50,
  },
});

class InputSlider extends React.Component {
  handleSliderChange = (event, newValue) => {
    this.setValue(newValue);
  };

  handleInputChange = event => {
    this.setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  handleBlur = () => {
    if (this.props.value < this.props.min) {
      this.setValue(this.props.min);
    } else if (this.props.value > this.props.max) {
      this.setValue(this.props.max);
    }
  };

  setValue = (value) => {
    this.props.setRotateToDegree(value);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} >
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <CropRotateIcon />
          </Grid>
          <Grid item xs>
            <Slider
              value={typeof this.props.value === 'number' ? this.props.value : 0}
              min={this.props.min}
              max={this.props.max}
              onChange={this.handleSliderChange}
              aria-labelledby="input-slider"
            />
          </Grid>
          <Grid item>
            <Input
              className={classes.input}
              value={this.props.value}
              margin="dense"
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
              inputProps={{
                step: this.props.step,
                min: this.props.min,
                max: this.props.max,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(InputSlider);
