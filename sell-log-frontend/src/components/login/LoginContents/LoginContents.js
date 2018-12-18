import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginContents.scss';
import Login from '../LoginContainer/Login';
import LoginSns from './LoginSns';

class LoginContents extends Component {
    render() {
        return (
            <div className="LoginContents">
                <div className="section">
                    <div className="label">이메일로 로그인하기</div>
                    <div className="form">
                        <div className="input">
                            <div className="description">이메일</div>
                            <input type="text" name="email" placeholder="이메일 주소" onChange={this.props.handleEmailChanged}></input>
                        </div>
                        <div className="input password">
                            <div className="description">비밀번호</div>
                            <input type="password" name="password" placeholder="비밀번호" onChange={this.props.handlePasswordChanged}></input>
                        </div>
                    </div>
                    <div className="button" onClick={this.props.signIn}>로그인</div>
                    <div className="text-links">
                        <div className="password-search">
                            <Link to="/">비밀번호 찾기</Link>
                        </div>
                        <div className="register">
                            <span>셀로그에 처음이신가요?</span>
                            <Link to="/auth/register">회원가입</Link>
                        </div>
                    </div>
                    <div className="divider">
                        <span>또는</span>
                    </div>
                    <div className="label">SNS 계정으로 로그인/가입하기</div>
                    <LoginSns />
                </div>
            </div>
        );
    }
}

export default LoginContents;