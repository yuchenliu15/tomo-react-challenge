import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLaptop, faBook, faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faLaptop, faBook, faCheck);

ReactDOM.render(
    <Provider store={store} >
      <App />
    </Provider>,
  document.getElementById('root')
);
