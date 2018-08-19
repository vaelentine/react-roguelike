import React, { Component } from 'react';
import Grid from './components/grid/grid';
import Header from './components/header/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid />
      </div>
    );
  }
}

export default App;
