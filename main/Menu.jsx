import React from 'react'
import { Link } from 'react-router-dom'
import './w3.css'

class Menu extends React.Component {
    render() {
        return (            
            <div className="w3-bar w3-black">
                <Link to="/" className="w3-bar-item w3-button">Calculator</Link>
                <Link to="/about" className="w3-bar-item w3-button">About</Link>
            </div> 
        );
    }
}

export default Menu;