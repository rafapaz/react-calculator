import React from 'react'
import './w3.css'

export default class Button extends React.Component {
    render() {
        return (
            <button onClick={e => this.props.click(this.props.label)} className="w3-button w3-border w3-round" >{this.props.label}</button>
        );
    }
}