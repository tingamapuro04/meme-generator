import React, { useState } from 'react'

function Nonsense({setup, punchline}) {
  const [isShown, setIsShown] = useState(false);
  const wee = () => {
    setIsShown(prev => !prev)
  }
  return (
    <div>
      {!isShown && <p>{setup}</p>}
      <p>punchline</p>
      <button onClick={wee}>{isShown ? "Hide" : "Show"}</button>
    </div>
  )
}

export default Nonsense
