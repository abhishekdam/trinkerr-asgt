import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/SignIn">
          <SignIn />
        </Route>
        <Route path="/">
          <SignUp />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
