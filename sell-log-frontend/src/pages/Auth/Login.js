import React, { Component } from 'react';
import PageTemplate from 'components//base/PageTemplate';
import Login from 'components/login/LoginContainer';

class Auth extends Component {
    render() {
        return (
            <div>
                <PageTemplate >
                    <Login/>
                </PageTemplate>
            </div>
        );
    }
}

export default Auth;