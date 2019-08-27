// React
import React, {useState} from 'react';
//Router
// import {BrowserRouter as Router, Route} from 'react-router-dom'
// Components
import FindGamesHeader from './FindGameForm/FindGamesHeader'
import BoardGameCollection from './BoardGameCollection/BoardGameCollection'
import BoardGameShow from './BoardGameShow/BoardGameShow'
import Navbar from './Navbar'
// Style
import './App.css';

function App() {

  const [boardgames, setBoardgames] = useState([])
  const [currentBoardgame, setCurrentBoardgame] = useState(null)

  console.log(boardgames)

  return (
    <div className="App">

      <Navbar {...{setCurrentBoardgame}} />

      {!currentBoardgame ? (
        <>
          <FindGamesHeader {...{setBoardgames}} />
          <BoardGameCollection {...{boardgames, setCurrentBoardgame}} />
        </>
    ) : <BoardGameShow {...{currentBoardgame}} />}

    </div>
  );
}

export default App;
