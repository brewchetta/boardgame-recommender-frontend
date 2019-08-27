import React from 'react'
import FindGamesForm from './FindGamesForm'
import {appName} from '../../constants'

const FindGamesHeader = ({setBoardgames}) => {

  return (
    <>
      <div id='find-games-header'>
        <h1>Welcome to {appName}!</h1>
        <p>Type in three game titles and we'll find something fun for you to play!</p>
      </div>

      <FindGamesForm {...{setBoardgames}} />
    </>
  )

}

export default FindGamesHeader
