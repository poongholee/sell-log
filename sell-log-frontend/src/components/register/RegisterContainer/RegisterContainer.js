import React, { Component } from 'react';
import './RegisterContainer.scss';
import LoginHeader  from 'components/login/LoginHeader';
import RegisterSelect from 'components/register/RegisterSelect';
import RegisterInput from 'components/register/RegisterInput';

class RegisterContainer extends Component {

    state = {
        registerTypeSelect : false
    }

    handleRegisterType = () => {
        this.setState({
            registerTypeSelect: true
        })
    }

    render() {
        const { registerTypeSelect } = this.state;
        return (
            <div className="register-container">
                <div className="inner">        
                    <LoginHeader />
                    { !registerTypeSelect ?  <RegisterSelect handleRegisterType={this.handleRegisterType}/> : <RegisterInput/>}
                </div>
            </div>
        );
    };
}

export default RegisterContainer;