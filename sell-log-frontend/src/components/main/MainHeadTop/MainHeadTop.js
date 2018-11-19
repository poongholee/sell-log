import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainHeadSearch from 'components/main/MainHeadSearch'

import './MainHeadTop.scss'

class MainHeadTop extends Component {

    render() {
        return (
            <div className="MainHeadTop">
                <Link to="/" className="logo">
                    SELL LOG
                </Link>
                <MainHeadSearch />
            </div>
        );
    }
}

export default MainHeadTop;