import React from 'react'
import "./CreateUser.css"
import { useGetValues } from '../../hooks/UseGetValue'

const initialState = {
  name: "",
  profession: "",
  age: ""
}

function CreateUser() {
  const {formdata, setFormData, handleChange} = useGetValues  (initialState)

  
  const handleSubmit = (e) => {
    e.preventDefault()
}

  return (
    <div className='create__user'>
      <h2>Create User</h2>
      <form className='create__user-form'onSubmit={handleSubmit} action="">
        <input required value={formdata.name} onChange={handleChange} name='name' type="text" placeholder='name' />
        <input required value={formdata.profession} onChange={handleChange} name='profession' type="text" placeholder='profession' />
        <input required value={formdata.age} onChange={handleChange} name='age' type="number" placeholder='age' />
        <select name="" id="">
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button>Create</button>
      </form>
    </div>
  )
}

export default CreateUser