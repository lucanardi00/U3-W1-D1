import React from "react"

class ButtonComponent extends React.Component {
    render() {
        return <button className={`base-class ${this.props.className}`}>{this.props.content}</button>
    }
}

export default ButtonComponent