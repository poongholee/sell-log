import React, { Component } from 'react';
import './RegisterContainer.scss';
import { Link } from 'react-router-dom';
import RegisterId from '../RegisterId';
import RegisterUser from 'components/register/RegisterUser';


class RegisterContainer extends Component {
    render() {
        return (
            <div className="register-container">
                <h2>
                    <strong>환영합니다</strong>
                    간단한 회원가입으로 포인트를 확인하세요
                </h2>
                <RegisterId />
                <RegisterUser />
                <Link to='/'class="confirm">가입 완료</Link>
            </div>
        )
    }
}

export default RegisterContainer;