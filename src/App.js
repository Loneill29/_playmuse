import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <Link className="nav-link" to='/'>Home</Link>
            <Link className="nav-link" to='/library'>Library</Link>
            <Link className="nav-link" to='/album'>Album</Link>
          </nav>
          <h1>P L A Y M U S E</h1>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
