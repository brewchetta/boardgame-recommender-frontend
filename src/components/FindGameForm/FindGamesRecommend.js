import React, {useEffect, useState} from 'react'

const FindGamesRecommend = ({input, setCurrentInput}) => {

  const [boardgameNames, setBoardgameNames] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/names')
    .then(res => res.json())
    .then(setBoardgameNames)
  },[])

  const renderFilteredBoardgameNames = () => {
    return boardgameNames
    .filter(n => n.toLowerCase().includes(input.toLowerCase()) && n.toLowerCase() !== input.toLowerCase())
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
