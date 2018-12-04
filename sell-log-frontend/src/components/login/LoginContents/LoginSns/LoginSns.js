import React, { Component } from 'react';
import './LoginSns.scss';

class LoginSns extends Component {
    render() {
        return (
            <div className="sns-buttons">
                <div className="facebook btn">FaceBook</div>
                <div className="google btn">Google+</div>
                <div className="twitter btn">Twitter</div>
            </div>
        );
    }
}

export default LoginSns;