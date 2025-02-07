import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/:val/:url' element={<Dashboard/>} ></Route>
      <Route path='/' element={<Register/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
     </Routes>
    </>
  )
}

export default App
