import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from 'pages/Home';
import Auth from 'pages/Auth/Login';
import Register from 'pages/Auth/Register';
import UserInfo from 'pages/MyPage/UserInfo';
import UserBasket from 'pages/MyPage/UserBasket';
import UserCoupon from 'pages/MyPage/UserCoupon';
import Product from 'pages/Product';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Sell Log</title>
          <meta
            name="description"
            content="1인가구 공동구매 서비스. 합리적인 가격으로 생활용품을 꾸려보세요."
          />
        </Helmet>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/auth/register" component={Register} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/mypage/userInfo" component={UserInfo}/>
          <Route exact path="/mypage/userBasket" component={UserBasket}/>
          <Route exact path="/mypage/userCoupon" component={UserCoupon}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
