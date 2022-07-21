import React, { useState } from 'react'

function Tems() {
  const [formdata, setFormData] = useState(
    {first: "", second: "", email: ""}
  );
  console.log(formdata)
  const handleChange = (e) => {
    e.preventDefault()
    setFormData(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }
  return (
    <>
      <form>
        <input
         type="text"
         placeholder="people"
         onChange={handleChange}
         name="first"
         value={formdata.first}
         />
        <input
         type="text"
         placeholder="us"
         onChange={handleChange}
         name="second"
         value={formdata.second}
         />
         <input
         type="email"
         placeholder="ooo"
         onChange={handleChange}
         name="email"
         value={formdata.email}
         />
      </form>
    </>
  )
}

export default Tems