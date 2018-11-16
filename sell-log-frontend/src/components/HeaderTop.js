import React, { Component } from 'react'

class HeaderTop extends Component {
    render() {
        return (
            <div className="header-top">
                <div className="logo">SELL LOG</div>
                <div className="inner-search">
                    <div className="total-search">
                        <input type="text" className="btn-main-search" placeholder="검색어를 입력해 주세요" />
                        <a className="btn-search" href="">검색</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderTop;