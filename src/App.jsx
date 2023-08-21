import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import reactLogo from '../public/assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/nav/nav'
import Main from './Components/main/Main'
import Carrusel from './Components/carrusel/carrusel'
import Hero from './layouts/Hero'
import Home from './pages/home'
import Error404 from './pages/error404'
import Cities from './pages/Cities'
import Detail from './pages/Details'

const router = createBrowserRouter([
  { path:'/', element:<Home/>},
  { path:'/cities', element:<Cities/>},
  { path:'/error404', element:<Error404/>},
  { path: '/detail/:id', element:<Detail/>},
  { path:'*', element:<Error404/>}
  /*{path:'*', element:<Hero/>, children: [
      {path:'/error404', element:<Error404/>}
    ]}*/
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router} />
  )
}

export default App
