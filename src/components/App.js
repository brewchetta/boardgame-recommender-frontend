import React, {useState} from 'react';
import FindGameForm from './FindGameForm/FindGameForm'
import BoardGameCollection from './BoardGameCollection/BoardGameCollection'
import './App.css';

function App() {

  const [boardgames, setBoardgames] = useState([])

  console.log(boardgames)

  return (
    <div className="App">

      <h1>Welcome to Board Game Recommender!</h1>

      <p>Type in three game titles and we'll find something fun for you to play!</p>

      <FindGameForm {...{setBoardgames}} />

      <BoardGameCollection {...{boardgames}} />

    </div>
  );
}

export default App;
