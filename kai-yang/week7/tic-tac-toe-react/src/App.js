import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';


class App extends React.Component {
  render(){
    return (
      <div>

      <h1>Tic Tac Toe React Version</h1>
      <Game />

      </div>
    )
  }
}//App class

export default App;
