import React, { Component } from 'react';
import PageTemplate from 'components/base/PageTemplate';
import MainHead from 'components/main/MainHead';
import MyPageContainer from 'components/mypage/MyPageContainer';
import MyPageUserBasket from 'components/mypage/MyPageUserBasket';

class UserBasket extends Component {
    render() {
        return (
            <PageTemplate >
                <MainHead />
                <div className="container">
                    <MyPageContainer/>
                    <MyPageUserBasket/>
                </div>
            </PageTemplate>
        )
    }
}

export default UserBasket;