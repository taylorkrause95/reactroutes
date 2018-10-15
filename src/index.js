import React, { Component } from 'react';
import { render } from 'react-dom';
import './CSS/index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

class Home extends Component{
  render(){
    return(
      <div>
        <Router>
        <div>
          <ul>
            <li>
          <Link to="/">Home</Link>
            </li>
            <li>
          <Link to="/Happy">Happy</Link>
        </li>
        <li>
          <Link to="/Sleepy">Sleepy</Link>
        </li>
        <li>
          <Link to="/Guilty">Guilty</Link>
        </li>
      </ul>

      <hr />

    <Route path="/Happy" component={Happy} />
    <Route path="/Sleepy" component={Sleepy} />
    <Route path="/Guilty" component={Guilty} />
  </div>
</Router>
</div>
  )
}
}


render( <Home />, document.getElementById('root') );
