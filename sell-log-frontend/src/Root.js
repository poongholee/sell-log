import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import App from './components/App';

class Root extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <Route path="/" component={App}/>
        </BrowserRouter>
      </Provider>
    )
  };
}

export default Root;