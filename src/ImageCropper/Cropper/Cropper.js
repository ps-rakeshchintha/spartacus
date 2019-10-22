import React from "react";
import imageCropper from 'cropperjs';
import './Cropper.css';
import 'cropperjs/dist/cropper.min.css';

class Cropper extends React.Component {
    cropper = undefined;
    componentDidMount() {
        const image = document.getElementById('cropper-img');
        this.cropper = new imageCropper(image, {
            aspectRatio: this.props.aspectRatio,
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
            this.cropper.moveTo(0,0)
        }
        if (prevProps.aspectRatio !== this.props.aspectRatio)
            this.cropper.setAspectRatio(this.props.aspectRatio);
        if (prevProps.flipHorizontal !== this.props.flipHorizontal)
            this.cropper.scaleX(this.props.flipHorizontal ? -1 : 1);
        if (prevProps.flipVertical !== this.props.flipVertical)
            this.cropper.scaleY(this.props.flipVertical ? -1 : 1);
    }
    zoomIn = () => {
        this.cropper.zoom(0.1);
    }
    zoomOut = () => {
        this.cropper.zoom(-0.1);
    }
    cropImage = () => {
        const canvas = this.cropper.getCroppedCanvas({
            imageSmoothingEnabled: false,
            imageSmoothingQuality: 'high'
        });
        const dataURL = canvas.toDataURL(this.props.imageType);

        let link = document.createElement("a");
        link.href = dataURL;
        link.download = "modified_"+this.props.imageName;
        document.body.append(link);
        link.click();
        link.remove();
    }
    render() {
        return (
            <React.Fragment>
                <div className="cropper-box">
                    <img id="cropper-img" src={this.props.imageUrl} alt="Cropper" />
                </div>
            </React.Fragment>
        )
    }
}

export default (Cropper);