import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';
import Home from "./components/pages/Home";
import Services from "./components/pages/Events/Services";
import Product from "./components/pages/About/Product";
import SignUp from "./components/pages/SignUp";
import Members from "./components/pages/Team/Members"



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Services' exact component={Services} />
          <Route path='/Products' exact component={Product} />
          <Route path='/sign-up' exact component={SignUp} />
          <Route path='/Members' exact component={Members} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
