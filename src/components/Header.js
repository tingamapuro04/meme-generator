import React from 'react'
import head from '../img/troll.png'

function Header() {
  return (
    <div className='header'>
      <img className="img" src={head} alt="troll" />
      <p className="para1">meme generator</p>
      <p>React-Project-3</p>
    </div>
  )
}

export default Header
