import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Dashboard from './components/dashboard/';
import Board from './components/board/';
import Settings from './components/settings';
import './App.css';


function App() {

  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/board/:boardId">
          <Board />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Redirect to="/" />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
