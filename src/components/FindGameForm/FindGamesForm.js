import React, {useState} from 'react'
import FindGamesRecommend from './FindGamesRecommend'
import {dbEndpoint} from '../../constants'
import './style.css'

const FindGamesForm = ({setBoardgames}) => {
  const [input, setInput] = useState({inputOne: '', inputTwo: '', inputThree: ''})
  const [currentField, setCurrentField] = useState('')

  // const url = `http://localhost:3000/boardgames?q=${input.inputOne}`
  const url = `${dbEndpoint}?games=${input.inputOne},${input.inputTwo},${input.inputThree}`

  const setCurrentInput = (newInput) => {
    setInput({...input, [`input${currentField}`]: newInput})
    setCurrentField('')
  }

  const fetchBoardGames = () => {
    console.log(url)
    fetch(url, {
      method: 'POST'
    })
    .then(res =>res.json())
    .then(res => {
      setBoardgames(res.games)
    })
  }

  const handleChange = event => {
    setInput({...input, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    setCurrentField('')

    const {inputOne, inputTwo, inputThree} = input

    if (inputOne && inputTwo && inputThree) {
      fetchBoardGames()
    }
  }

  // Autosuggests games similar to google lending search results

  return (
    <div id='find-game-form'>

      <form onSubmit={handleSubmit}>
        <input type='text'
          name='inputOne'
          value={input.inputOne}
          onChange={handleChange}
          onFocus={() => setCurrentField('One')}/>
        <input type='text'
          name='inputTwo'
          value={input.inputTwo}
          onChange={handleChange}
          onFocus={() => setCurrentField('Two')}/>
        <input type='text'
          name='inputThree'
          value={input.inputThree}
          onChange={handleChange}
          onFocus={() => setCurrentField('Three')}/>
        <input type='submit' value='Submit' />
      </form>

      <FindGamesRecommend input={input[`input${currentField}`]} setCurrentInput={setCurrentInput}/>

    </div>
  )
}

export default FindGamesForm
