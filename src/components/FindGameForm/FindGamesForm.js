import React, {useState} from 'react'
import FindGamesRecommend from './FindGamesRecommend'
import {dbEndpoint} from '../../constants'
import './style.css'

const FindGamesForm = ({setBoardgames}) => {
  const [inputOne, setInputOne] = useState({content: '', isGame: true})
  const [inputTwo, setInputTwo] = useState({content: '', isGame: true})
  const [inputThree, setInputThree] = useState({content: '', isGame: true})
  const [currentField, setCurrentField] = useState('')

  // Determines what the content of the currently focused field is
  const currentContent = eval(currentField) ? eval(currentField).content : null

  // Creates a url to post to based on current inputs
  const mapInputsToURL = () => {
    const games = [inputOne, inputTwo, inputThree].filter(input => input.isGame && input.content.length).map(input => input.content).join(',')

    const mechanics = [inputOne, inputTwo, inputThree].filter(input => !input.isGame).map(input => input.content).join(',')

    return `?${games.length ? `games=${games}` : ''}${games.length && mechanics.length ? '&' : ''}${mechanics.length ? `mechanics=${mechanics}` : ''}`
  }

  // Figures out the current input and sets it
  const setCurrentInput = (content, isGame) => {
    const newInput = {content, isGame}
    eval('setI' + currentField.slice(1))(newInput)
    setCurrentField('')
  }

  const fetchBoardGames = () => {
    const url = `${dbEndpoint}${mapInputsToURL()}`
    console.log(url)
    fetch(url, {
      method: 'POST'
    })
    .then(res =>res.json())
    .then(res => setBoardgames(res.games))
  }

  // Get the setInput based on current field
  const handleChange = event => {
    eval('setI' + currentField.slice(1))({content: event.target.value, isGame: true})
  }

  const handleSubmit = event => {
    event.preventDefault()
    setCurrentField('')

    if (inputOne && inputTwo && inputThree) fetchBoardGames()
  }

  return (
    <div id='find-game-form'>

      <form onSubmit={handleSubmit}>
        <input type='text'
          style={inputOne.isGame ? {background: '#E7DFC3'} : {background: '#E8CCD0'}}
          name='inputOne'
          value={inputOne.content}
          onChange={handleChange}
          onFocus={() => setCurrentField('inputOne')}/>
        <input type='text'
          style={inputTwo.isGame ? {background: '#E7DFC3'} : {background: '#E8CCD0'}}
          name='inputTwo'
          value={inputTwo.content}
          onChange={handleChange}
          onFocus={() => setCurrentField('inputTwo')}/>
        <input type='text'
          style={inputThree.isGame ? {background: '#E7DFC3'} : {background: '#E8CCD0'}}
          name='inputThree'
          value={inputThree.content}
          onChange={handleChange}
          onFocus={() => setCurrentField('inputThree')}/>
        <input type='submit' value='Submit' />
      </form>

      <FindGamesRecommend input={currentContent} setCurrentInput={setCurrentInput}/>

    </div>
  )
}

export default FindGamesForm
