import React from 'react'

function Form() {

  const abule = () => {
    console.log('I am being hovered over')
  }


  return (
    <div>
      <form>
        <input type="text" placeholder="shut" />
        <input type="text" placeholder="and take the money" />
        <br />
        <button onMouseOver={abule} className="btn">Get a meme</button>
      </form>
    </div>
  )
}

export default Form
