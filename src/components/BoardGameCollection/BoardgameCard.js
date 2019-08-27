import React from 'react'

const BoardgameCard = ({boardgame}) => {

  const renderDescription = description => {
    return description
    .replace(/&#10;/gi, '\n')
    .replace(/&quot;/gi, `"`)
    .replace(/&ndash;/gi, '-')
  }

  return (
    <div className='board-game-card'>
      <img style={{width: '100px', height: '100px'}} src={boardgame.image ? boardgame.image : 'https://s3.amazonaws.com/walrus-assets/img/BoardGameTheory.jpg'} alt='' />

      <h3>{boardgame.name}</h3>

      <p>average rating: {boardgame.avgrating.toFixed(1)} | ratings: {boardgame.ratingscount}</p>

      <p>{renderDescription(boardgame.description)}</p>

      <p>Designer: {boardgame.designer}</p>

      <p>Artists: {boardgame.artists.join(', ')}</p>

      <p>Categories: {boardgame.categories.join(', ')}</p>

      <p>Mechanics: {boardgame.mechanics.join(', ')}</p>

      <p>Players: {boardgame.minplayers}-{boardgame.maxplayers} | Best with {parseInt(boardgame.best)}</p>

      <p>Playtime {boardgame.minplaytime} minutes</p>

      <p>Age {boardgame.minage} and up</p>

      <p>Published {boardgame.published} by {boardgame.publisher}</p>
    </div>
  )
}

export default BoardgameCard
