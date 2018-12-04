import React, { Component } from 'react';
import './RegisterInput.scss';

class RegisterSelect extends Component {

    

    render() {
        return (
            <div className="contents">
                <div className="section">
                    <div className="label">
                        이메일로 가입하기
                    </div>
                    <div className="form">
                        <div className="input">
                            <div className="description">이메일</div>
                            <input type="text" name="email" placeholder="이메일 주소"></input>
                        </div>
                        <div className="input password">
                            <div className="description">비밀번호</div>
                            <input type="password" name="password" placeholder="6자 이상 입력"></input>
                        </div>
                        <div className="input password_check">
                            <div className="description">비밀번호 확인</div>
                            <input type="password" name="password" placeholder="6자 이상 입력 한번 더"></input>
                        </div>
                        <div className="button" >회원가입</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterSelect;