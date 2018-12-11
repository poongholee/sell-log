import React, { Component } from 'react';
import PageTemplate from 'components/base/PageTemplate';
import MainHead from 'components/main/MainHead';
import MyPageContainer from 'components/mypage/MyPageContainer';
import MyPageUserInfo from 'components/mypage/MyPageUserInfo';

class UserInfo extends Component {
    render() {
        return (
            <PageTemplate >
                <MainHead />
                <div className="container">
                    <MyPageContainer/>
                    <MyPageUserInfo/>
                </div>
            </PageTemplate>
        )
    }
}

export default UserInfo;