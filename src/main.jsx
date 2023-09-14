import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from "@react-oauth/google"

ReactDOM.createRoot(document.getElementById('raiz')).render(
  //<React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="563279997730-7ncra9if59b87itmggarheiop3ajpgm4.apps.googleusercontent.com">
        <App/>
      </GoogleOAuthProvider>
    </Provider>
  //</React.StrictMode>,
)
