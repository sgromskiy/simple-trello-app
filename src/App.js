import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { readTheme } from './store/settings/actions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import ErrorMessage from './components/common/errorMessage';
import Dashboard from './components/dashboard/';
import Board from './components/board/';
import Settings from './components/settings/';
import './App.css';


function App() {
  const theme = useSelector(state => state.settings.theme);
  const dispatch = useDispatch();
  const themeName = `app ${theme}`;
  useEffect(() => {
    dispatch(readTheme())
  }, [])


  return (
    <div className={themeName}>
    <ErrorMessage />
    <Router basename="/simple-trello-app/">
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
