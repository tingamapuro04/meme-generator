import React, { useState } from 'react'

function Tems() {
  const [formdata, setFormData] = useState(
    {first: "", second: "", email: "", area: "", check: true}
  );
  console.log(formdata)
  const handleChange = (e) => {
    const {name, value, type, checked} = e.target
    e.preventDefault()
    setFormData(prev => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  



  return (
    <>
      <form>

        <input
        type="radio"
        id="Unemployed"
        name="radioBtn"
         />

         <label htmlFor="Unemployed">Bila kazi</label>



        <input
        type="checkbox"
        id= "isFriendly"
        checked={formdata.check}
        onChange={handleChange}
        name="isFriendly"
        />
        <label htmlFor="isFriendly" >are you friendly</label>
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
         <textarea name="area" value={formdata.area} onChange={handleChange} />
      </form>
    </>
  )
}

export default Tems