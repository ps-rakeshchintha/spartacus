import React, { Fragment } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import ImageCropper from './ImageCropper/ImageCropper';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        minHeight: 48,
        paddingTop: 8,
        marginLeft: 20,
        width: 180,
        position: "absolute"
    },
    tabs: {
        paddingLeft: 220
    },
    appBar: {
        zIndex: 1300
    }
});

class App extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Router>
                <Route path="/" render={({ location }) => (
                    <Fragment>
                        <AppBar position="fixed" className={classes.appBar}>
                            <Typography variant="h6" className={classes.title}>
                                The Image Toolkit
                            </Typography>
                            <Tabs className={classes.tabs} value={location.pathname}>
                                <Tab value="/" label="Crop Image" component={Link} to="/" />
                            </Tabs>
                        </AppBar>

                        <Switch>
                            <Route exact path="/">
                                <ImageCropper />
                            </Route>
                        </Switch>
                    </Fragment>)}
                />
            </Router>
        )
    }
}

export default withStyles(styles)(App)
