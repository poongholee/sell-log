import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginSnsInfo extends Component {
    render() {
        return (
            <Link to="/" id={this.props.id}>{this.props.name}</Link>
        )
    }
}

export default LoginSnsInfo;