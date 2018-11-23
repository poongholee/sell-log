import React, { Component } from 'react';
import MainFooterTop from '../MainFooterTop/MainFooterTop';
import MainFooterBody from '../MainFooterBody/MainFooterBody';
import MainFooterInfo from '../MainFooterInfo/MainFooterInfo';
import MainFooterBottom from '../MainFooterBottom/MainFooterBottom';
import './Footer.css';

class MainFooterHead extends Component {
    render() {
        return (
            <div>
                <MainFooterTop/>
                <MainFooterBody/>
                <MainFooterInfo/>
                <MainFooterBottom/>
            </div>
        )
    }
}

export default MainFooterHead;