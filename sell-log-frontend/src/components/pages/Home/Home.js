import React, { Component } from 'react';
import PageTemplate from '../../base/PageTemplate';
import MainHead from '../../main/MainHead';
import MainFooter from '../../main/MainFooter';
import LoginForm from '../../login/LoginContainer';
import Register from '../../register/RegisterContainer';

class Home extends Component { 
    render() {
        return (
            <PageTemplate >
                <MainHead />
                <MainFooter />
            </PageTemplate>
        )
    }
}

export default Home;