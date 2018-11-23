import React, { Component } from 'react';
import MainHeadTop from '../MainHeadTop';

import './MainHead.scss';

class MainHead extends Component {

    render() {
        return (
            <div className='MainHead'>
                <MainHeadTop />
            </div>
        );
    }
}

export default MainHead;