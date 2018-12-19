import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import  LoginHeader  from './../LoginHeader';
import  LoginContents  from './../LoginContents';
import { API_URL } from 'constant.js';
import cookie from 'react-cookies';

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    // 이벤트 값 가져와서 state 값 설정
    handleEmailChanged = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    handlePasswordChanged = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    _login = (email, password) => {
        fetch(`${API_URL}/api/user/login`,{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
                email,
                password
            })
        })
        .then((response) => response.json()) 
        .then(json => {
            let username = json.name;
            let useremail = json.email;
            if(username) {
                alert(username + '님 환영합니다!')

                // 쿠키 저장
                const expires = new Date()
                expires.setDate(expires.getDate() + 14)

                cookie.save('name', username);
                cookie.save('email', useremail);

                window.location.href = "/";
                //alert("name: " + cookie.load('name'))
            } else {
                alert('로그인 실패!')
            }
        })
    }

    // 로그인 버튼 클릭 시
    signIn = () => {
        const { email, password } = this.state;
        this._login(email, password);
    }

    render() {
        return (
            <div className="login-container">
                <div className="inner">        
                    <LoginHeader />
                    <LoginContents signIn={this.signIn} handleEmailChanged={this.handleEmailChanged} handlePasswordChanged={this.handlePasswordChanged}/>
                </div>
            </div>
        )
    }

    
}		
    
export default Login;       