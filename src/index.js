import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'
import './index.css';
import Search from './js/Search';
import Asset from './js/Asset';

ReactDOM.render((
  <HashRouter>
    <div>
      <Route path='/search' component={Search} />
      <Route path='/asset/:id' component={Asset} />
    </div>
  </HashRouter>
), document.getElementById('root'));
