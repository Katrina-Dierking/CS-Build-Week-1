import React from 'react'
import Rules from './components/Rules'
import Grid from './components/Grid'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Katrina's Game of Life</h1>
      <h3>Because it's her life -- you're just living in it ;-) </h3>
      <Rules />
      <Grid />
     
    </div>
  );
}

export default App;
