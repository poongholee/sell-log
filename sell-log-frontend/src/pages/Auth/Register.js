import React, { Component } from 'react';
import PageTemplate from 'components/base/PageTemplate';
import RegisterContainer from 'components/register/RegisterContainer';

class Register extends Component {
    render() {
        return (
            <PageTemplate>
                <RegisterContainer />
            </PageTemplate>
        );
    }
}

export default Register;
