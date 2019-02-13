import React, { Component } from 'react';
import '../App.css';
import './MainPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import AddNew from './AddNew';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/new" component={AddNew} />
          <Route component={MainPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
