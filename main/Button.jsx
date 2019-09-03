import React from 'react'
import './w3.css'

class Button extends React.Component {
    render() {
        return (            
                <button onClick={e => this.props.click(this.props.label)} className={(this.props.myClass) ? this.props.myClass : "w3-button w3-border w3-round w3-col l3"} >{this.props.label}</button>
        );
    }
}

export default Button;