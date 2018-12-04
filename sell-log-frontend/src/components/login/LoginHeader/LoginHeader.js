import React, { Component } from 'react';
import './LoginHeader.scss';
import { Link } from 'react-router-dom';
import logo from 'static/images/sell-logo.png';

class LoginHeader extends Component {
    render() {
        return(
            <div>
                <Link to="/" className="title-bar">
                    <img src={logo} alt="img-logo"/>
                </Link>
            </div>
        );
    }
}

export default LoginHeader;