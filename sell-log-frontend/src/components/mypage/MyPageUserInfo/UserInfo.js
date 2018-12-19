import React, { Component } from 'react';
import './UserInfo.scss';
import cookie from 'react-cookies';

class UserInfo extends Component {

    _logout = () => {
        cookie.remove('name');
        cookie.remove('email');
        window.location.href = "/";
        alert('로그아웃 되셨습니다.')
    }

    render() {
        return (
            <div className="contents">
                <div className="section">
                    <div className="section_name">계정</div>
                    <div className="section-content">
                        <div className="row">
                            <div className="name">이메일</div>
                            <div className="row-content">
                                <input type="text" className="input" value={cookie.load('email')} onChange={this.props.handleEmailChanged}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="name">이름</div>
                            <div className="row-content">
                                <input type="text" className="input" value={cookie.load('name')} onChange={this.props.handleNameChanged}></input>
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
                            <div className="name">비밀번호</div>
                            <div className="row-content">
                                <input type="password" className="input" onChange={this.props.handlePasswordChanged}></input>
                            </div>
                        </div>
                        <div className="row"></div>
                    </div>
                </div>
                <div className="section">
                    <div className="section_name">알림</div>
                    <div className="section-content">
                        <div className="row">
                            <div className="name">이메일 수신</div>
                            <div className="row-content">
                                <div className="option-toggle">
                                    <div className="text">셀로그 이벤트 및 업데이트 소식</div>
                                    <div className="toggle">
                                        <div className="toggle-switch">
                                            <div className="fill"></div>
                                            <div className="circle"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="name">알림</div>
                            <div className="row-content">
                                <div className="option-toggle">
                                    <div className="text">관심상품 업데이트 알림</div>
                                    <div className="toggle">
                                        <div className="toggle-switch">
                                            <div className="fill"></div>
                                            <div className="circle"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="option-toggle">
                                    <div className="text">공동구매 완료 알림</div>
                                    <div className="toggle">
                                        <div className="toggle-switch">
                                            <div className="fill"></div>
                                            <div className="circle"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="option-toggle">
                                    <div className="text">맞춤 할인 및 이벤트 소식</div>
                                    <div className="toggle">
                                        <div className="toggle-switch">
                                            <div className="fill"></div>
                                            <div className="circle"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="unregister">
                        <div className="lined-text" onClick={this._logout}>로그아웃</div>
                    </div>
                    <div className="save-button-wrapper">
                        <button class="button" onClick={this.props.updateUserInfo}>저장</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserInfo;