import React, { Component } from 'react';
import GlobalStyle from './components/shared/GlobalStyle';

export default class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <h1>Hello World</h1>
      </div>
    )
  }
}
