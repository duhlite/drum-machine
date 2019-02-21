import React, { Component } from 'react';
import './App.css';
import DrumMachine from './components/drum_machine';
import Controls from './components/controls';

class App extends Component {
  render() {
    return (
      <div className="App">
      <DrumMachine />
      <Controls />
      </div>
    );
  }
}

export default App;
