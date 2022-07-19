import { useState } from "react";
import React from 'react'

function Nonsense() {
  const [list, setList] = useState({
    firstName: "Adoyo",
    secondName: "Alphonce",
    isFavourite: true
  })

  // const abuso = () => {
  //   setList(prev => [...prev, Math.floor(Math.random()*prev.length)])
  // }

  // const all =list.map(item => <p>{item}</p>)
  let setTrue = list.isFavourite ? "True" : "False"

  return (
    <div>
      <button>iiii</button>
      <div>{setTrue}</div>
    </div>
  )
}

export default Nonsense
