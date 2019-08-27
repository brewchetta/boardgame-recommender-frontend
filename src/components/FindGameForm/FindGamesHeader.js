import React from 'react'
import FindGamesForm from './FindGamesForm'

const FindGamesHeader = ({setBoardgames}) => {

  return (
    <div id='find-games-header'>
      <h1>Welcome to Board Game Recommender!</h1>
      <p>Type in three game titles and we'll find something fun for you to play!</p>
      <FindGamesForm {...{setBoardgames}} />
    </div>
  )

}

export default FindGamesHeader
