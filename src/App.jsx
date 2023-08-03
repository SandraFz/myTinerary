import { useState } from 'react'
import reactLogo from '../public/assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/nav/nav'
import Main from './layouts/main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
            <Nav/>
        </header>
      <Main/>
    </>
  )
}

export default App
