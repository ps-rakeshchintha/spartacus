import React from "react";
import Divider from "@material-ui/core/Divider";

import AspectRatio from "./AspectRatio/AspectRatio";
import Transform from "./Transform/Transform";
import Zoom from "./Zoom/Zoom";

class Options extends React.Component {
    handleAspectRatioChange = (aspectRatio) => {
        this.props.onAspectRatioChange(aspectRatio);
    }
    toggleFlipHorizontal = () => {
        this.props.toggleFlipHorizontal();
    }
    toggleFlipVertical = () => {
        this.props.toggleFlipVertical();
    }
    setRotateToDegree = (deg) => {
        this.props.setRotateToDegree(deg);
    }
    zoomOut = () => {
        this.props.zoomOut();
    }
    zoomIn = () => {
        this.props.zoomIn();
    }
    render() {
        return (
            <React.Fragment>
                <Divider />
                <AspectRatio
                    aspectRatio={this.props.cropperOptions.aspectRatio}
                    onAspectRatioChange={this.handleAspectRatioChange} />
                <Divider />
                <Transform
                    flipHorizontal={this.props.cropperOptions.flipHorizontal}
                    flipVertical={this.props.cropperOptions.flipVertical}
                    rotateToDegree={this.props.cropperOptions.rotateToDegree}
                    toggleFlipHorizontal={this.toggleFlipHorizontal}
                    toggleFlipVertical={this.toggleFlipVertical}
                    setRotateToDegree={this.setRotateToDegree}
                />

                <Divider />
                <Zoom
                    zoomIn={this.zoomIn}
                    zoomOut={this.zoomOut}
                />
            </React.Fragment>
        )
    }
}

export default Options