import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import ImageCropper from './ImageCropper/ImageCropper';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.Fragment>
        <CssBaseline />
        <ImageCropper />
    </React.Fragment>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
