import React from 'react'

const BoardGameStars = ({rating}) => {

  const calculateWidth = () => {
    return `${(rating / 10) * 5}em`
  }

  // ✩✩✩✩✩ ❀ ✿ ⭑

  return (
    <div className='stars-container'>
      <p className='stars-underlay'>✿✿✿✿✿</p>
      <p className='stars-overlay' style={{width: calculateWidth()}}>✿✿✿✿✿</p>
    </div>
  )
}

export default BoardGameStars
