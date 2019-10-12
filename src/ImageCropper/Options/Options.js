import React from "react";
import Divider from "@material-ui/core/Divider";

import AspectRatio from "./AspectRatio/AspectRatio";
import Transform from "./Transform/Transform";

class Options extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Options</h1>
                <Divider />     
                <AspectRatio />
                <Divider />   
                <Transform />
            </React.Fragment>
        )
    }
}

export default Options