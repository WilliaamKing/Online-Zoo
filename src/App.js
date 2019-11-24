import React, {Fragment}from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header/index';
import Animals from './components/Animals/index';
import Places from './components/Places/index';
import './App.css';

function App() {
  return (
    <Fragment>
       <Router>
          <div className="app">
              <Header />

              <div className = "content">
                  <Switch>
                    <Route exact path = '/' component = {Animals}/>
                    <Route path = '/places' component = {Places}/>
                  </Switch>
              </div>
          </div>
       </Router>
    </Fragment>
    
  );
}

export default App;
