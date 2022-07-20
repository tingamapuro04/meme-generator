import React, { useState } from 'react'

function On({on, ff, mobutu}) {

  const [back, setBack] = useState(on)

  const handleClick = () => {
    setBack(prev => !prev);
  }

  const styles = {
    background: back? '#333' : 'green',
    cursor: 'pointer'
  }
  return (
    <div>
      <div style={styles} className="waja" onClick={handleClick} >{ff}</div>
    </div>
  )
}

export default On
