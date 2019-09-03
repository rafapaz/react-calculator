import React from 'react'
import './w3.css'

export default class Display extends React.Component {
    render() {
        return (
            <div className="w3-border w3-padding w3-margin-bottom w3-round">{this.props.value}</div>
        );
    }
}