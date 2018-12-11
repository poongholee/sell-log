import React, { Component } from 'react';
import './MyPageContainer.scss';
import { Link } from 'react-router-dom';
import MyPageUserInfo from 'components/mypage/MyPageUserInfo';
import MyPageUserBasket from 'components/mypage/MyPageUserBasket';
import MyPageUserCoupon from 'components/mypage/MyPageUserCoupon';

class MyPageContainer extends Component {
    render() {
        return (
                <div className="tab">
                    <div className="tab-item active"><Link to="/mypage/userinfo">내 정보</Link></div>
                    <div className="tab-item false"><Link to="/mypage/userbasket">장바구니</Link></div>
                    <div className="tab-item false"><Link to="/mypage/usercoupon">쿠폰조회</Link></div>
                </div>

        )
    }
}

export default MyPageContainer;