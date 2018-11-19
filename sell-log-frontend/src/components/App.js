import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Home } from 'pages';

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
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </React.Fragment>
    )
  };
}

export default App;