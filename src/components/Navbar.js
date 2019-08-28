import React from 'react'
import {appName} from '../constants'

const Navbar = ({setCurrentBoardgame, currentBoardgame}) => {

  return (
    <div id='navbar'>
      <h2 onClick={() => setCurrentBoardgame(null)}>{currentBoardgame ? 'Back to ' : null}{appName}</h2>
    </div>
  )

}

export default Navbar
