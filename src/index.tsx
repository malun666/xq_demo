import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import Home from './page/homepage';

const store = configureStore();
const Root = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
ReactDOM.render(<Root />, document.getElementById('root'));
