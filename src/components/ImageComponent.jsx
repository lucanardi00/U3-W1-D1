import React from "react"

class ImageComponent extends React.Component {
    render(){
        const {src, alt} = this.props;
        return(
            <img src={src} alt={alt} width={400} />
        );
    }
}

export default ImageComponent