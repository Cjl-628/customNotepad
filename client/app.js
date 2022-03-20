import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NotesList from './NotesList';
import CreateNote from './CreateNote';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div id="main">
          <h1>Notepad</h1>
          <h2>
            <Link to="/createNote">Add New Note</Link>
          </h2>
          <h2>
            <Link to="/notesList">View Notes</Link>
          </h2>
          <Switch>
            <Route exact path="/notesList" component={NotesList} />
            <Route path="/createNote" component={CreateNote} />
          </Switch>
        </div>
      </Router>
    );
  }
}
