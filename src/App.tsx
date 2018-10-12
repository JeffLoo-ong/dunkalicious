import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignIn from './components/SignIn';
import Registration from './components/Registration';
import NavBar from './components/NavBar';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={SignIn} />
          <Route path="/register" component={Registration} />
        </div>
      </Router>
    );
  }
}

export default App;
