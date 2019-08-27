import React from 'react'
import BoardGameStars from './BoardGameStars'

const BoardgameCard = ({boardgame, setCurrentBoardgame}) => {

  return (
    <div className='board-game-card'
      onClick={() => setCurrentBoardgame(boardgame)}>

      <div className='board-game-card-background'
        style={boardgame.image ?
          {backgroundImage: `url('${boardgame.image}')`}
          : {backgroundImage: `url('https://s3.amazonaws.com/walrus-assets/img/BoardGameTheory.jpg')`}}
      />

      <h3>{boardgame.name}</h3>

      {/* <p>{boardgame.avgrating.toFixed(1)} stars</p> */}

      <BoardGameStars rating={boardgame.avgrating.toFixed(1)} />

      <p>{boardgame.categories.join(', ')} | {boardgame.mechanics.join(', ')}</p>
    </div>
  )
}

export default BoardgameCard
