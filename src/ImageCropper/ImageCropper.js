import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

import Options from "./Options/Options";
import Cropper from "./Cropper/Cropper";
import FileUpload from "./FileUpload/FileUpload";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: "flex"
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        position: "absolute",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
        textAlign: "center",
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(3),
        }
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
    cropBtn: {
        margin: "0 40px"
    },
    cropper: {
        marginTop: 50
    }
});

class ImageCropper extends React.Component {
    state = {
        mobileOpen: false,
        cropperOptions: {
            aspectRatio: undefined,
            flipHorizontal: false,
            flipVertical: false,
            rotateToDegree: 0
        },
        imageName: undefined,
        imageType: undefined,
        imageUrl: undefined
    }
    handleDrawerToggle = () => {
        this.setState({
            mobileOpen: !this.state.mobileOpen
        })
    }
    handleFileUpload = (imageUrl, imageType, imageName) => {
        this.setState({
            imageUrl: imageUrl,
            imageName: imageName,
            imageType: imageType
        })
    }
    handleAspectRatioChange = (aspectRatio) => {
        let cropperOptions = this.state.cropperOptions;
        cropperOptions.aspectRatio = aspectRatio;
        this.setState({
            cropperOptions: cropperOptions
        })
    }
    toggleFlipHorizontal = () => {
        let cropperOptions = this.state.cropperOptions;
        cropperOptions.flipHorizontal = !cropperOptions.flipHorizontal;
        this.setState({
            cropperOptions: cropperOptions
        })
    }
    toggleFlipVertical = () => {
        let cropperOptions = this.state.cropperOptions;
        cropperOptions.flipVertical = !cropperOptions.flipVertical;
        this.setState({
            cropperOptions: cropperOptions
        })
    }
    setRotateToDegree = (deg) => {
        let cropperOptions = this.state.cropperOptions;
        cropperOptions.rotateToDegree = deg;
        this.setState({
            cropperOptions: cropperOptions
        })
    }
    zoomOut = () => {
        this.refs.cropper.zoomOut();
    }
    zoomIn = () => {
        this.refs.cropper.zoomIn();
    }
    cropImage = () => {
        this.refs.cropper.cropImage();
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                {this.state.imageUrl &&
                    <nav className={classes.drawer}>
                        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

                        <Hidden smUp implementation="css">
                            <Drawer
                                variant="temporary"
                                anchor="left"
                                open={this.state.mobileOpen}
                                onClose={this.handleDrawerToggle}
                                classes={{
                                    paper: classes.drawerPaper
                                }}
                                ModalProps={{
                                    keepMounted: true // Better open performance on mobile.
                                }}
                            >
                                <div className={classes.toolbar} />
                                <Options
                                    onAspectRatioChange={this.handleAspectRatioChange}
                                    cropperOptions={this.state.cropperOptions}
                                    toggleFlipHorizontal={this.toggleFlipHorizontal}
                                    toggleFlipVertical={this.toggleFlipVertical}
                                    setRotateToDegree={this.setRotateToDegree}
                                    zoomIn={this.zoomIn}
                                    zoomOut={this.zoomOut} />

                                <Button
                                    component="div"
                                    variant="contained"
                                    color="primary"
                                    onClick={() => this.cropImage()}
                                    size="large">
                                    Crop
                                </Button>
                            </Drawer>
                        </Hidden>
                        <Hidden xsDown implementation="css">
                            <Drawer
                                classes={{
                                    paper: classes.drawerPaper
                                }}
                                variant="permanent"
                                open
                            >
                                <div className={classes.toolbar} />
                                <Options
                                    onAspectRatioChange={this.handleAspectRatioChange}
                                    cropperOptions={this.state.cropperOptions}
                                    toggleFlipHorizontal={this.toggleFlipHorizontal}
                                    toggleFlipVertical={this.toggleFlipVertical}
                                    setRotateToDegree={this.setRotateToDegree}
                                    zoomIn={this.zoomIn}
                                    zoomOut={this.zoomOut} />

                                <Button
                                    className={classes.cropBtn}
                                    component="div"
                                    variant="contained"
                                    color="primary"
                                    onClick={() => this.cropImage()}
                                    size="large">
                                    Crop
                                </Button>
                            </Drawer>
                        </Hidden>
                    </nav>
                }
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {!this.state.imageUrl && <FileUpload handleFileUpload={this.handleFileUpload} />}
                    {
                        this.state.imageUrl &&
                        <React.Fragment>
                            <Hidden smUp>
                                <IconButton
                                    color="primary"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={() => this.handleDrawerToggle()}
                                    className={classes.menuButton}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Hidden>
                            <Cropper className={classes.cropper} ref="cropper"
                                imageUrl={this.state.imageUrl}
                                imageName={this.state.imageName}
                                imageType={this.state.imageType}
                                rotateToDegree={this.state.cropperOptions.rotateToDegree}
                                aspectRatio={this.state.cropperOptions.aspectRatio}
                                flipHorizontal={this.state.cropperOptions.flipHorizontal}
                                flipVertical={this.state.cropperOptions.flipVertical} />
                        </React.Fragment>
                    }

                </main>

            </div>
        )
    }
}

export default withStyles(styles)(ImageCropper)