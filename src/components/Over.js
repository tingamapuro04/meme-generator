import React, { useState } from 'react'

function Over() {
  const [Data, setData] = useState(
    {Fname: '', Sname: '', checked: false, Tname: ''}
    )

    const handleChange = (e) => {
      const {name, value, type, checked} = e.target
      setData(prev => {
        return {
          ...prev,
          [name]: type === "checkbox"? checked : value 
        }
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      Data.Sname === Data.Tname? console.log('Form submitted') :console.log('hrty');
      !Data.checked? console.log('See you next') : console.log('Thanks for joining')
      
    }


  return (
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      placeholder="First Name"
      name="Fname"
      value={Data.Fname}
      onChange={handleChange}
      />

      <input
        type="password"
        placeholder="Enter password"
        name="Sname"
        minLength={4}
        required
        value={Data.Sname}
        onChange={handleChange}
      />

      <input
        type="password"
        placeholder="Confirm password"
        name="Tname"
        minLength={4}
        required
        value={Data.Tname}
        onChange={handleChange}
      />

      <input type="checkbox" id="makena" name="checked" onChange={handleChange} />
      <label htmlFor="makena">Select</label>

      <button>Signup</button>


    </form>
  )
}

export default Over