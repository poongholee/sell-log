import React, { Component } from 'react';
import HeaderTop from './HeaderTop';
import '../styles/header.css';

class Header extends Component {
    
    render() {
        return (
            <div className='header'>
                <HeaderTop />
            </div>
        );
    }    
}

export default Header;