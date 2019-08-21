import React from 'react'

const BoardgameCard = ({boardgame}) => {
  return (
    <div>
      {boardgame.image ? <img src={boardgame.img} alt='' /> : null}
      <h3>{boardgame.name}</h3>
      <p>average rating: {boardgame.avgrating.toFixed(1)} | ratings: {boardgame.ratingscount}</p>
      <p>{boardgame.description}</p>
      <p>Designer: {boardgame.designer}</p>
      <p>Artists: {boardgame.artists.join(', ')}</p>
      <p>Categories: {boardgame.categories.join(', ')}</p>
      <p>Mechanics: {boardgame.mechanics.join(', ')}</p>
      <p>Players: {boardgame.minplayers}-{boardgame.maxplayers} | Best with {parseInt(boardgame.best)}</p>
      <p>Playtime {boardgame.minplaytime}-{boardgame.maxplaytime} minutes</p>
      <p>Age {boardgame.minage} and up</p>
      <p>Published {boardgame.published} by {boardgame.publisher}</p>
    </div>
  )
}

export default BoardgameCard
