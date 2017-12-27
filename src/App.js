import React, { Component } from 'react';
import {Provider} from 'react-redux';
import configureStore from './configureStore';
import AsyncApp from './containers/AsyncApp';

// TODO: why outside class?
const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    );
  }
}
