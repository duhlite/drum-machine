import React, { Component } from 'react';
import './App.css';
import DrumMachine from './components/drum_machine';

class App extends Component {
  render() {
    return (
      <div className="App">
      <DrumMachine />
      </div>
    );
  }
}

export default App;
