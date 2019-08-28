import React, {useEffect, useState} from 'react'

const FindGamesRecommend = ({input, setCurrentInput}) => {

  const [boardgameNames, setBoardgameNames] = useState([])

  useEffect(() => {
    fetch('http://localhost:3050/names')
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
      const parsedN = n.toLowerCase().split(' ')
      return checkForMatchingWords(parsedN) && n.toLowerCase() !== input.toLowerCase()})
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
