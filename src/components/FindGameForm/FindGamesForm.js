import React, {useState} from 'react'
import FindGamesRecommend from './FindGamesRecommend'
import {dbEndpoint} from '../../constants'
import './style.css'

const FindGamesForm = ({setBoardgames}) => {
  const [inputOne, setInputOne] = useState({content: '', isGame: true})
  const [inputTwo, setInputTwo] = useState({content: '', isGame: true})
  const [inputThree, setInputThree] = useState({content: '', isGame: true})
  const [currentField, setCurrentField] = useState('')

  const currentContent = eval(currentField) ? eval(currentField).content : null

  const mapInputToURL = (gameOrCateg) => {
    return 'zonk'
  }

  // const url = `http://localhost:3000/boardgames?q=${input.inputOne}`
  const url = `${dbEndpoint}?games=${mapInputToURL(true)}&mechanics=${mapInputToURL(false)}`

  const setCurrentInput = (newInput, isGame) => {
    eval('setI' + currentField.slice(1))({content: newInput, isGame})
    setCurrentField('')
  }

  const fetchBoardGames = () => {
    console.log(url)
    fetch(url, {
      method: 'POST'
    })
    .then(res =>res.json())
    .then(res => setBoardgames(res.games))
  }

  const handleChange = event => {
    eval('setI' + currentField.slice(1))({...eval(currentField), content: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    setCurrentField('')

    if (inputOne && inputTwo && inputThree) fetchBoardGames()
  }

  // Autosuggests games similar to google lending search results

  return (
    <div id='find-game-form'>

      <form onSubmit={handleSubmit}>
        <input type='text'
          name='inputOne'
          value={inputOne.content}
          onChange={handleChange}
          onFocus={() => setCurrentField('inputOne')}/>
        <input type='text'
          name='inputTwo'
          value={inputTwo.content}
          onChange={handleChange}
          onFocus={() => setCurrentField('inputTwo')}/>
        <input type='text'
          name='inputThree'
          value={inputThree.content}
          onChange={handleChange}
          onFocus={() => setCurrentField('inputThree')}/>
        <input type='submit' value='Submit' />
      </form>

      <p>{inputOne.isGame ? "1" : "0"}{inputTwo.isGame ? "1" : "0"}{inputThree.isGame ? "1" : "0"}</p>

      <FindGamesRecommend input={currentContent} setCurrentInput={setCurrentInput}/>

    </div>
  )
}

export default FindGamesForm
