import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MainHeadSearch.scss'

class MainHeadSearch extends Component {
    render() { 
        return (
            <div className="inner-search">
                <div className="total-search">
                    <input type="text" className="btn-main-search" placeholder="검색어를 입력해 주세요" />
                    <Link className="btn-search" to="/">검색</Link>
                </div>
            </div>
        )
    }
}

export default MainHeadSearch;