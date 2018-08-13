import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Users from './components/users.js';
import Albums from './components/albums.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Link to = "/users"><button>USERS</button></Link>
         <Link to = "/albums"><button>ALBUMS</button></Link>
        </header>
        <Route path  = "/users" component = {Users} />
<Route path  = "/albums" component = {Albums} />
        
      </div>
    );
  }
}

export default App;
