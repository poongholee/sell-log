import React, { Component } from 'react';
import './UserInfo.scss';

class UserInfo extends Component {
    render() {
        return (
            <div className="contents">
                <div className="section">
                    <div className="section_name">계정</div>
                    <div className="section-content">
                        <div className="row">
                            <div className="name">닉네임</div>
                            <div className="row-content">
                                <input className="input" value="dlvndghs"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="name">이름</div>
                            <div className="row-content">
                                <input className="input" value="이풍호"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="name">성별</div>
                            <div className="row-content">
                                <div className="gender-options">
                                    <div className="option">
                                        <div className="radio-btn">
                                            <div className="radio-button"></div>
                                        </div>
                                        <div className="radio-name">남성</div>
                                    </div> 
                                    <div className="option">
                                        <div className="radio-btn">
                                            <div className="radio-button"></div>
                                        </div>
                                        <div className="radio-name">여성</div>
                                    </div>
                                    <div className="option">
                                        <div className="radio-btn">
                                            <div className="radio-button selected"></div>
                                        </div>
                                        <div className="radio-name">선택안함</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="name">휴대폰번호</div>
                            <div className="row-content">
                                <div className="phone">
                                    <div className="phone-block">dlvndghs@naver.com</div>
                                    <div className="button-wrapper">
                                        <div className="button">이메일 변경</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="name">비밀번호</div>
                            <div className="row-content">
                                <div className="lined-text">비밀번호 변경</div>
                            </div>
                        </div>
                        <div className="row"></div>
                    </div>
                </div>
                <div className="footer"></div>
            </div>
        )
    }
}

export default UserInfo;