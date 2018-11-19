import React, { Component } from 'react';
import PageTemplate from 'components/base/PageTemplate';
import MainHead from 'containers/main/MainHead';

class Home extends Component { 
    render() {
        return (
            <PageTemplate>
                <MainHead />
            </PageTemplate>
        )
    }
}

export default Home;