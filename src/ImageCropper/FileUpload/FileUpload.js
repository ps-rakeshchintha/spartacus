import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
});

class FileUpload extends React.Component {
    
    onFileUpload = (e) => {
        var files = e.target.files;
        var done = (url) => {
            this.props.handleFileUpload(url);
        };
        var reader;
        var file;

        if (files && files.length > 0) {
            file = files[0];

            if (URL) {
                done(URL.createObjectURL(file));
            } else if (FileReader) {
                reader = new FileReader();
                reader.onload = function (e) {
                    done(reader.result);
                };
                reader.readAsDataURL(file);
            }
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="image-upload-btn"
                    type="file"
                    onChange={this.onFileUpload}
                />
                <label htmlFor="image-upload-btn">
                    <Button
                        component="span"
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload
                        </Button>
                </label>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(FileUpload);