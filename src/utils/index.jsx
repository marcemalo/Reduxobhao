import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import TranslationComponent from '../components/Transilation/TransilationComponent';

ReactDOM.render(
  <Provider store={store}>
    <TranslationComponent />
  </Provider>,
  document.getElementById('root')
);