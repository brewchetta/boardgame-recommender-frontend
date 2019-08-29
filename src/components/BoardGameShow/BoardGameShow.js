import React from 'react'
import {defaultGameBackground} from '../../constants'
import './style.css'

const BoardGameShow = ({currentBoardgame}) => {

  const renderDescription = description => {
    return description
    .replace(/&#10;/gi, '\n')
    .replace(/&quot;/gi, `"`)
    .replace(/&ndash;/gi, '-')
    .replace(/&mdash;/gi, '-')
    .replace(/&#195;&#137;/gi, 'É')
    .replace(/&#9;/gi, ' ')
    .replace(/&rsquo;/gi, "'")
  }

  return (
    <div className='board-game-show'>

      <div className='board-game-show-column-1'>

        <img id='boardgame-show-image' src={currentBoardgame.image ? currentBoardgame.image : defaultGameBackground} alt='' />

        <h3>{currentBoardgame.name}</h3>

        <p>Average Rating: {currentBoardgame.avgrating.toFixed(1)} | Ratings: {currentBoardgame.ratingscount}</p>

        <p>For {currentBoardgame.minplayers}-{currentBoardgame.maxplayers} Players | Best with {parseInt(currentBoardgame.best)} | Playtime {currentBoardgame.minplaytime} minutes</p>

        <p>{currentBoardgame.categories.join(', ')} | {currentBoardgame.mechanics.join(', ')}</p>

        <p>Ages {currentBoardgame.minage} and up</p>

        <p>{currentBoardgame.designer ? `Designer: ${currentBoardgame.designer}` : null}</p>

        <p>{currentBoardgame.artists.length ? `Artists: ${currentBoardgame.artists.join(', ')}` : null}</p>

        <p>{currentBoardgame.published ? `Published ${currentBoardgame.published}` : ''} {currentBoardgame.publisher ? ` by ${currentBoardgame.publisher}` : null}</p>

      </div>

      <div className='board-game-show-column-2'>

        <p>{renderDescription(currentBoardgame.description)}</p>

      </div>

    </div>
  )
}

export default BoardGameShow
