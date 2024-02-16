import { useState } from 'react'
import {BrowserRouter , Routes , Route } from 'react-router-dom'


import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import LocationList from './Components/LocationList'
import Register from './Components/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/about' Component={About} />
            <Route path='/locations' Component={LocationList} />
            <Route path='/register' Component={Register} />
          </Routes>
          </BrowserRouter>

      </div>
      
    </>
  )
}

export default App
