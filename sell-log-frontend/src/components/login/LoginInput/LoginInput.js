import React, { Component } from 'react';
import './LoginInput.scss';
import { Link } from 'react-router-dom';

class LoginInput extends Component {
    render() {
        return (
            <div>
                <div className="logN_box">
                    <input type="text" className="valueTxt" placeholder="아이디를 입력하세요" title="아이디"></input>
                    <Link to="/" className="logN_del">삭제</Link>
                </div>
                <div className="logN_box">
                    <input type="password" className="valueTxt" placeholder="비밀번호를 입력하세요" password="비밀번호"></input>
                    <Link to="/" className="logN_pass">비번확인</Link>
                </div>
                <button type='button' className="btnReg">로그인</button>
            </div>
        )
    }
}

export default LoginInput;