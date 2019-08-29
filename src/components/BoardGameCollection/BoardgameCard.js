import React from 'react'
import BoardGameStars from './BoardGameStars'
import {defaultGameBackground} from '../../constants'

const BoardgameCard = ({boardgame, setCurrentBoardgame}) => {

  return (
    <div className='board-game-card'
      onClick={() => setCurrentBoardgame(boardgame)}>

      <div className='board-game-card-background'
        style={boardgame.image ?
          {backgroundImage: `url('${boardgame.image}')`}
          : {backgroundImage: `url(${defaultGameBackground})`}}
      />

      <h3>{boardgame.name}</h3>

      <BoardGameStars rating={boardgame.avgrating.toFixed(1)} />

      <br/>

      <p>{boardgame.categories.join(', ')} {boardgame.categories.length && boardgame.mechanics.length ? '|' : null} {boardgame.mechanics.join(', ')}</p>

      <br/>

      <p>Chosen based on: <br/>{boardgame.bestfeatures.join(', ')}</p>
    </div>
  )
}

export default BoardgameCard
