import React from 'react'
// import {localEndpoint} from '../../constants'
import {boardgameNames} from '../../data/boardgame-names'
import {categories} from '../../data/categories'

const FindGamesRecommend = ({input, setCurrentInput}) => {

  /* Utilities */

  const checkForMatchingWords = (array) => {
    return array.reduce((acc, word) => {
      if (acc) return true
      return word.startsWith(input.toLowerCase())
    }, false)
  }

  const renderFilteredArray = (array, numberReturned, classname) => {
    return array
    .filter(n => {
      const lowN = n.toLowerCase()
      const parsedN = lowN.split(' ')
      return (
        lowN.startsWith(input.toLowerCase()) || checkForMatchingWords(parsedN)
      )})
    .map(n => (
      <button className={`recommendation ${classname}`}
      key={n}
      onClick={() => {
        const isGame = classname === 'find-game'
        setCurrentInput(n, isGame)
      }}
      >{array === categories ? 'Category: ': null}{n}</button>
    ))
    .slice(0, numberReturned)
  }

  return (
    <div>
      {input ?
        <>
        {renderFilteredArray(boardgameNames, 10, 'find-game')}
        {renderFilteredArray(categories, 5, 'find-category')}
        </>
        : null}
    </div>
  )
}

export default FindGamesRecommend
