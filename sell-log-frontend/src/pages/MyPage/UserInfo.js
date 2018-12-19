import React, { Component } from 'react';
import PageTemplate from 'components/base/PageTemplate';
import MainHead from 'components/main/MainHead';
import MyPageContainer from 'components/mypage/MyPageContainer';
import MyPageUserInfo from 'components/mypage/MyPageUserInfo';
import { API_URL } from 'constant.js';
import cookie from 'react-cookies';

class UserInfo extends Component {

    state = {
        email: '',
        password: '',
        name: ''
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

    handleNameChanged = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    _update = (email, password, name) => {
        fetch(`${API_URL}/api/user`,{
			method: 'PUT',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
                email,
                password,
                name
            })
        })
        .then((response) => response.json()) 
        .then(json => {
            let status = json.nModified;
            if(status === 1) {
                alert('회원정보 변경 성공!')
            } else {
                alert('회원정보 변경 실패!')
            }
        })
    }

    // 비밀번호 변경
    updateUserInfo = () => {
        const { email, password, name } = this.state;
        //alert("email+: " + email+"pw: " + password+"name: " + name);
        this._update(cookie.load('email'), password, cookie.load('name'));
    }



    render() {
        return (
            <PageTemplate >
                <MainHead />
                <div className="container">
                    <MyPageContainer />
                    <MyPageUserInfo 
                        handleEmailChanged={this.handleEmailChanged} 
                        handlePasswordChanged={this.handlePasswordChanged}
                        handleNameChanged={this.handleNameChanged}
                        updateUserInfo={this.updateUserInfo}
                    />
                </div>
            </PageTemplate>
        )
    }
}

export default UserInfo;