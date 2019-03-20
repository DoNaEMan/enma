import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

const App = ({ route }) => (
  <div>
    <Link to='/a'><button>A</button></Link>
    <Link to='/b'><button>B</button></Link>
    {renderRoutes(route)}
  </div>
);
export default App;
