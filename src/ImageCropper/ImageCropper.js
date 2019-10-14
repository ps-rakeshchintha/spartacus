import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";

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
        padding: theme.spacing(3)
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
});

class ImageCropper extends React.Component {
    state = {
        mobileOpen: false,
        cropperOptions: {
            aspectRatio: 16/9,
            flipHorizontal: false,
            flipVertical: false,
            rotateToDegree: 0,
        },
        imageUrl: undefined
    }
    handleDrawerToggle = () => {
        this.setState({
            mobileOpen: !this.state.mobileOpen
        })
    }
    handleFileUpload = (imageUrl) => {
        this.setState({
            imageUrl: imageUrl
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
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={() => this.handleDrawerToggle()}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer} aria-label="mailbox folders">
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
                            <Options
                                onAspectRatioChange={this.handleAspectRatioChange}
                                cropperOptions={this.state.cropperOptions}
                                toggleFlipHorizontal={this.toggleFlipHorizontal}
                                toggleFlipVertical={this.toggleFlipVertical}
                                setRotateToDegree={this.setRotateToDegree} />
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
                            <Options
                                onAspectRatioChange={this.handleAspectRatioChange}
                                cropperOptions={this.state.cropperOptions}
                                toggleFlipHorizontal={this.toggleFlipHorizontal}
                                toggleFlipVertical={this.toggleFlipVertical}
                                setRotateToDegree={this.setRotateToDegree} />
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {!this.state.imageUrl && <FileUpload handleFileUpload={this.handleFileUpload} />}
                    {
                        this.state.imageUrl &&
                        <Cropper
                            imageUrl={this.state.imageUrl}
                            rotateToDegree={this.state.cropperOptions.rotateToDegree} 
                            aspectRatio={this.state.cropperOptions.aspectRatio} 
                            flipHorizontal={this.state.cropperOptions.flipHorizontal} 
                            flipVertical={this.state.cropperOptions.flipVertical} />
                    }

                </main>

            </div>
        )
    }
}

export default withStyles(styles)(ImageCropper)