import React from 'react'

const BoardGameStars = ({rating}) => {

  const calculateWidth = () => {
    return `${(rating / 10) * 5}em`
  }

  // Possible unicode symbols: ✩✩✩✩✩ ❀ ✿ ⭑
  // &#xFE0E; ensure it uses proper unicode rather than emoji

  return (
    <div className='stars-container'>
      <p className='stars-underlay'>✿✿✿✿✿</p>
      <p className='stars-overlay' style={{width: calculateWidth()}}>✿&#xFE0E;✿&#xFE0E;✿&#xFE0E;✿&#xFE0E;✿&#xFE0E;</p>
    </div>
  )
}

export default BoardGameStars
