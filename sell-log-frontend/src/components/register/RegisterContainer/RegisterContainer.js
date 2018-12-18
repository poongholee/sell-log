import React, { Component } from 'react';
import './RegisterContainer.scss';
import LoginHeader  from 'components/login/LoginHeader';
import RegisterSelect from 'components/register/RegisterSelect';
import RegisterInput from 'components/register/RegisterInput';

class RegisterContainer extends Component {

    state = {
        registerTypeSelect: false,
        inputEmail: '',
        inputName: '',
        inputPassword: '',
        inputPasswordCheck: '',
        inputName: ''
    }


    // state handle 메소드
    handleRegisterType = () => {
        this.setState({
            registerTypeSelect: true
        });
    }

    handleInputEmail = (e) => {
        this.setState({
            inputEmail: e.target.value
        });
    }

    handleInputPassword = (e) => {
        this.setState({
            inputPassword: e.target.value
        });
    }

    handleInputPasswordCheck = (e) => {
        this.setState({
            inputPasswordCheck: e.target.value
        });
    }

    handleInputName = (e) => {
        this.setState({
            inputName: e.target.value
        });
    }

    // 회원가입 클릭 이벤트 메소드
    // http://172.16.6.131:4000/api/user/login, 
    _register = (email, name, password) => {
        fetch('http://localhost:4000/api/user/signUp',{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
                email,
                name,
                password
            })
        })
        .then((response) => response.json()) 
        .then(json => {
            alert("hi")
            let username = json.name;
            if(username) {
                alert(username + '님 회원가입을 축하드립니다!')
                window.location.href = "/";
            } else {
                alert('회원가입 실패!')
            }
        })
    }

    signUp = () => {
        const { inputEmail, inputPassword, inputPasswordCheck, inputName } = this.state;

        if ( inputPassword == inputPasswordCheck) {
            //alert('email: ' + inputEmail + 'password: ' + inputPassword + 'check: ' + 'name: ' + inputName);
            this._register(inputEmail, inputName, inputPassword);
        } else {
            alert("비밀번호를 확인하여주세요.")
        }
        //this._register(inputEmail, inputName, inputPassword);
        
    }

    render() {
        const { registerTypeSelect } = this.state;
        return (
            <div className="register-container">
                <div className="inner">        
                    <LoginHeader />
                    { !registerTypeSelect ?  
                        <RegisterSelect handleRegisterType={this.handleRegisterType}/> : <RegisterInput
                                handleRegisterType={this.handleRegisterType}
                                handleInputEmail={this.handleInputEmail}
                                handleInputPassword={this.handleInputPassword}
                                handleInputPasswordCheck={this.handleInputPasswordCheck}
                                handleInputName={this.handleInputName}
                                signUp={this.signUp}
                        />}
                </div>
            </div>
        );
    };
}

export default RegisterContainer;