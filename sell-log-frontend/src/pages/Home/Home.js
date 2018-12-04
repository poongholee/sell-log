import React, { Component } from 'react';
import PageTemplate from 'components/base/PageTemplate';
import MainHead from 'components/main/MainHead';
import MainFooter from 'components//main/MainFooter';
import Register from 'components//register/RegisterContainer';

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