import React, { useState } from 'react'

function Api() {
  const [star, setStar] = useState({})


  // fetch("https://swapi.dev/api/people/1")
  //   .then(response => response.json())
    // .then(data => setStar(data))
  return (
    <div>
      <pre>{JSON.stringify(star, null, 2)}</pre>
    </div>
  )
}

export default Api