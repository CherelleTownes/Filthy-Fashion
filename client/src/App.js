import React, { Component } from 'react';
import GlobalStyle from './components/shared/GlobalStyle';
import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
      </div>
    )
  }
}
