import React from 'react'
import {appName} from '../constants'

const Navbar = ({setCurrentBoardgame}) => {

  return (
    <div id='navbar'>
      <h2 onClick={() => setCurrentBoardgame(null)}>{appName}</h2>
    </div>
  )

}

export default Navbar
