import React, { useState, useEffect } from 'react'

function Api() {
  const [star, setStar] = useState({})
  const [count, setCount] = useState(1);

  const addMore = () => {
    setCount(prev => prev + 1)
  }


  useEffect(function() {
    fetch(`https://swapi.dev/api/people/${count}`)
    .then(response => response.json())
    .then(data => setStar(data))
  }, [count])

  return (
    <div>
      <p>I am counting {count} </p>
      <button onClick={addMore}>Add me</button>
      <pre>{JSON.stringify(star, null, 2)}</pre>
    </div>
  )
}

export default Api