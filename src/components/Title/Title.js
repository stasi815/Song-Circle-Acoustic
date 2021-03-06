import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Title.css';

class Title extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="Title">
                <header>
                    <h1>Song Circle Acoustic</h1>
                    <div className="Title-Subtitle">Sacred Songs for Acoustic Guitar</div>
                    <div>
                    <NavLink className="nav-link"  activeClassName="nav-link-active"
                    exact to="/">Collections</NavLink>
                    <NavLink className="nav-link"  activeClassName="nav-link-active"
                    to="/about">About</NavLink>
                    </div>
                </header>
            </div>
        )
    }
}
export default Title