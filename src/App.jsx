import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Error404 from './pages/error404'
import Cities from './pages/Cities'
import Detail from './pages/Details'
import Activities from './pages/Activities'
import SingUp from './pages/SingIn'

const router = createBrowserRouter([
  { path:'/', element:<Home/>},
  { path:'/cities', element:<Cities/>},
  { path:'/error404', element:<Error404/>},
  { path: '/detail/:id', element:<Detail/>},
  {path: '/singup', element:<SingUp/>},
  /* { path: '/itineraries/:id', element:<Itineraries/>}, */
  { path:'*', element:<Error404/>}
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router} />
  )
}

export default App
