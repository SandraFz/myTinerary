import { useState } from 'react'
import reactLogo from '../public/assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body>
        <header>
          <nav>
            <ul>
              <li>My Itinerary</li>
              <li>Home</li>
              <li>Cities</li>
              <li>Login</li>
            </ul>
          </nav>
        </header>
        <main>
          <div>
            <div>
              <h1>Find the perfect destination</h1>
              <p>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and host of itinerary options, planning your next trip has never been easier.</p>
              <input type="submit" value="View more"/>
            </div>
            <div>
              <img src="../public/assets/tourism-shutterstock_460303915-780.jpg" alt="Turista" />
            </div>
          </div>
        </main>
        <footer>

        </footer>
      </body>
    </>
  )
}

export default App
