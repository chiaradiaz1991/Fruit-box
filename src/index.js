import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'mobx-react';
import FruitStore from './stores/FruitStore';

const Root = (
  <Provider FruitStore={FruitStore}> 
    <App />
  </Provider>
)

ReactDOM.render(
  Root,
  document.getElementById('root')
);

serviceWorker.unregister();
