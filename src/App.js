import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faInstagram, faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import AboutMe from './components/pages/AboutMe';

library.add(fab, faTimes, faBars, faInstagram, faFacebook, faLinkedin, faGithub)

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-me' component={AboutMe} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
