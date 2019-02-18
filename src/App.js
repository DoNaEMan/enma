import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import A from './pages/testA/index'
import B from './pages/testB/index'

const Home = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/A">A</Link>
        </li>
        <li>
          <Link to="/B">B</Link>
        </li>
      </ul>
      <Route path="/A" component={A} />
      <Route path="/B" component={B} />
    </div>
  </Router>
)

export default Home
