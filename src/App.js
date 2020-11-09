import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Pages';
import SigninPage from './Pages/signin';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Router>
    
      <Switch>
        <Route path = "/" component = {Home} exact />
        <Route path = "/signin" component = {SigninPage} exact />
      </Switch>
      
    </Router>
    </>
  );
}

export default App;
