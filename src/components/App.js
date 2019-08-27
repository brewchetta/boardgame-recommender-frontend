// React
import React, {useState} from 'react';
//Router
import {BrowserRouter as Router, Route} from 'react-router-dom'
// Components
import FindGamesHeader from './FindGameForm/FindGamesHeader'
import BoardGameCollection from './BoardGameCollection/BoardGameCollection'
// Style
import './App.css';

function App() {

  const [boardgames, setBoardgames] = useState([])

  console.log(boardgames)

  return (
    <div className="App">

      <FindGamesHeader {...{setBoardgames}} />

      <BoardGameCollection {...{boardgames}} />

    </div>
  );
}

export default App;
