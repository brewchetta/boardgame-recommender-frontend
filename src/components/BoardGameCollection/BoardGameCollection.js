import React from 'react'
import BoardgameCard from './BoardgameCard'
import './style.css'

const BoardGameCollection = ({boardgames, setCurrentBoardgame}) => {

  const renderBoardGames = () => {
    return boardgames.map(boardgame => <BoardgameCard key={boardgame.name} {...{boardgame, setCurrentBoardgame}} />)
  }

  return (
    <div id='board-game-collection'>
      {renderBoardGames()}
    </div>
  )

}

export default BoardGameCollection
