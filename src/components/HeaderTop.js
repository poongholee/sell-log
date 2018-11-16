import React, { Component } from 'react'

class HeaderTop extends Component {
    render() {
        return (
            <div className="header-top">
                <a className="btn-menu" href="">전체메뉴</a>
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