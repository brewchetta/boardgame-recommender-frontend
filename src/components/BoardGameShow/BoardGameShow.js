import React from 'react'
import './style.css'

const BoardGameShow = ({currentBoardgame}) => {

  const renderDescription = description => {
    return description
    .replace(/&#10;/gi, '\n')
    .replace(/&quot;/gi, `"`)
    .replace(/&ndash;/gi, '-')
    .replace(/&mdash;/gi, '-')
    .replace(/&#195;&#137;/gi, 'É')
  }

  return (
    <div className='board-game-show'>

      <div id='boardgame-show-image-container'>

        <img id='boardgame-show-image' src={currentBoardgame.image ? currentBoardgame.image : defaultGameBackground} alt='' />

      </div>

      <h3>{currentBoardgame.name}</h3>

      <p>Average Rating: {currentBoardgame.avgrating.toFixed(1)} | Ratings: {currentBoardgame.ratingscount}</p>

      <p>For {currentBoardgame.minplayers}-{currentBoardgame.maxplayers} Players | Best with {parseInt(currentBoardgame.best)} | Playtime {currentBoardgame.minplaytime} minutes</p>

      <p>{currentBoardgame.categories.join(', ')} | {currentBoardgame.mechanics.join(', ')}</p>

      <p>{renderDescription(currentBoardgame.description)}</p>

      <p>Ages {currentBoardgame.minage} and up</p>

      <p>Designer: {currentBoardgame.designer ? currentBoardgame.designer : '?'} | Artists: {currentBoardgame.artists.length ? currentBoardgame.artists.join(', ') : '?'}</p>

      <p>Published {currentBoardgame.published} by {currentBoardgame.publisher}</p>

    </div>
  )
}

export default BoardGameShow
