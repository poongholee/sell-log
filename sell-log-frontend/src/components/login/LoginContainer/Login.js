import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import  LoginHeader  from './../LoginHeader';
import  LoginContents  from './../LoginContents';

class Login extends Component {
    render() {
        return (
            <div className="login-container">
                <div className="inner">        
                    <LoginHeader />
                    <LoginContents />
                </div>
            </div>
        )
    }
}		
    
export default Login;       