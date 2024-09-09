import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './router/Home/Home'
import CreateUser from './router/Createusers/CreateUser'
import AllUsers from './router/AllUsers/AllUsers'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create-user' element={<CreateUser/>}/>
        <Route path='/all-users' element={<AllUsers/>}/>
      </Routes>
    </div>
  )
}

export default App
