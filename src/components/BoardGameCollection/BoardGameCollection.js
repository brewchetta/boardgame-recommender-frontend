import React from 'react'
import BoardgameCard from './BoardgameCard'

const BoardGameCollection = ({boardgames}) => {

  const renderBoardGames = () => {
    return boardgames.map(boardgame => <BoardgameCard key={boardgame.name} {...{boardgame}} />)
  }

  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
      {renderBoardGames()}
    </div>
  )

}

export default BoardGameCollection
