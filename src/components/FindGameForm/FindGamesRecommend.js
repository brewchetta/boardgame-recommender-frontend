import React, {useEffect, useState} from 'react'
import {localEndpoint} from '../../constants'

const FindGamesRecommend = ({input, setCurrentInput}) => {

  const [boardgameNames, setBoardgameNames] = useState([])

  useEffect(() => {
    fetch(`${localEndpoint}/names`)
    .then(res => res.json())
    .then(setBoardgameNames)
  },[])

  const checkForMatchingWords = (array) => {
    return array.reduce((acc, word) => {
      if (acc) return true
      return word.startsWith(input.toLowerCase())
    }, false)
  }

  const renderFilteredBoardgameNames = () => {
    return boardgameNames
    .filter(n => {
      const lowN = n.toLowerCase()
      const parsedN = lowN.split(' ')
      return (lowN.startsWith(input.toLowerCase()) || checkForMatchingWords(parsedN)) && lowN !== input.toLowerCase()})
    .map(n => (
      <button className='find-games-recommendation'
      key={n}
      onClick={() => setCurrentInput(n)}
      >{n}</button>
    ))
    .slice(0, 10)
  }

  return (
    <div>
      {input ? renderFilteredBoardgameNames() : null}
    </div>
  )
}

export default FindGamesRecommend
