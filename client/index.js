import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from '../src/App';
import route from '../src/router';

ReactDOM.render(<BrowserRouter><App route={route} /></BrowserRouter>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}

