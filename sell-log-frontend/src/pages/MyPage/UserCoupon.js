import React, { Component } from 'react';
import PageTemplate from 'components/base/PageTemplate';
import MainHead from 'components/main/MainHead';
import MyPageContainer from 'components/mypage/MyPageContainer';
import MyPageUserCoupon from 'components/mypage/MyPageUserCoupon';

class UserCoupon extends Component {
    render() {
        return (
            <PageTemplate >
                <MainHead />
                <div className="container">
                    <MyPageContainer/>
                    <MyPageUserCoupon/>
                </div>
            </PageTemplate>
        )
    }
}

export default UserCoupon;