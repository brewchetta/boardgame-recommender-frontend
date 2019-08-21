import React, {useState} from 'react'

const FindGameForm = ({setBoardgames}) => {
  const [input, setInput] = useState({inputOne: '', inputTwo: '', inputThree: ''})

  const url = `http://localhost:3000/boardgames?q=${input.inputOne}`

  const fetchBoardGames = () => {
    fetch(url)
    .then(res => res.json())
    .then(games => setBoardgames(games))
  }

  const handleChange = event => {
    setInput({...input, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault()

    const {inputOne, inputTwo, inputThree} = input

    if (inputOne && inputTwo && inputThree) {
      fetchBoardGames()
    }
  }

  // Autosuggests games similar to google lending search results

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='inputOne' value={input.inputOne} onChange={handleChange} />
      <input type='text' name='inputTwo' value={input.inputTwo} onChange={handleChange} />
      <input type='text' name='inputThree' value={input.inputThree} onChange={handleChange} />
      <input type='submit' value='Submit' />
    </form>
  )
}

export default FindGameForm
