import React, { Component } from 'react';

class MainFooterBottom extends Component {
    render() {
        return (
            <a href="#" title="페이지 이동" target="_blank">
                <img src={this.props.src} alt={this.props.alt}></img>
            </a>
        )
    }
}

export default MainFooterBottom;