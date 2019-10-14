import React from "react";
import { withStyles } from "@material-ui/core/styles";
import imageCropper from 'cropperjs';
import './Cropper.css';
import 'cropperjs/dist/cropper.min.css';
import Button from '@material-ui/core/Button';

class Cropper extends React.Component {
    cropper = undefined;
    componentDidMount() {
        const image = document.getElementById('cropper-image-container');
        this.cropper = new imageCropper(image, {
            aspectRatio: 16 / 9,
            viewMode: 1,
            crop(event) {
                //console.log("x:" + event.detail.x);
                //console.log("y:" + event.detail.y);
                //console.log("width:" + event.detail.width);
                //console.log("height:" + event.detail.height);
                //console.log("rotate:" + event.detail.rotate);
                //console.log("scaleX" + event.detail.scaleX);
                //console.log("scaleY" + event.detail.scaleY);
            },
        });
    }
    componentDidUpdate(prevProps, prevSate) {
        if (prevProps.rotateToDegree !== this.props.rotateToDegree) {
            this.cropper.rotateTo(this.props.rotateToDegree);
            const containerData = this.cropper.getContainerData();
            this.cropper.zoomTo(.5, {
                x: containerData.width / 2,
                y: containerData.height / 2,
            });
        }
        if (prevProps.aspectRatio !== this.props.aspectRatio)
            this.cropper.setAspectRatio(this.props.aspectRatio);
        if (prevProps.flipHorizontal !== this.props.flipHorizontal)
            this.cropper.scaleX(this.props.flipHorizontal ? -1 : 1);
        if (prevProps.flipVertical !== this.props.flipVertical)
            this.cropper.scaleY(this.props.flipVertical ? -1 : 1);
    }
    cropImage = () => {
        const canvas = this.cropper.getCroppedCanvas();
        const dataURL = canvas.toDataURL("image/png");

        let link = document.createElement("a");
        link.href = dataURL;
        link.download = "image.png";
        document.body.append(link);
        link.click();
        link.remove();
    }
    render() {
        return (
            <div className="cropper-box">
                <img id="cropper-image-container" src={this.props.imageUrl} alt="Cropper" />
                <Button
                    component="span"
                    variant="contained"
                    color="primary"
                    onClick={() => this.cropImage()}
                    size="large">
                    Crop
                </Button>
            </div>
        )
    }
}

export default (Cropper);