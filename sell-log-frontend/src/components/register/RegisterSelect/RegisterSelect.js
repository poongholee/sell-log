import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RegisterSelect.scss';
import LoginSns from '../../login/LoginContents/LoginSns';

class RegisterSelect extends Component {
    render() {
        return (
            <div className="contents">
                <div className="section">
                    <div className="label">
                        이메일로 가입하기
                    </div>
                    <div className="form">
                        <div className="button" onClick={this.props.handleRegisterType}>회원가입</div>
                    </div> 
                    <div className="divider"></div>
                    <LoginSns/>
                    <div className="text-links">
                        <div className="register">
                            <span>이미 셀로그 회원이신가요?</span>
                            <Link to="/auth">로그인</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterSelect;