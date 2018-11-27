import React, { Component } from 'react';
import './LoginContainer.scss';
import LoginInput from '../LoginInput';
import LoginCheck from '../LoginCheck';
import LoginSns from '../LoginSns';

class LoginContainer extends Component {
    render() {
        return (
            <div className="login_form">
                <h2>로그인</h2>
                <LoginInput />      
                <LoginCheck />
                <LoginSns />
            </div>
        )
    }
}

export default LoginContainer;