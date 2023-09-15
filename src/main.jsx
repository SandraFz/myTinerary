import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from "@react-oauth/google"
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('raiz')).render(
  //<React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_ID_GOOGLE}>
        <App/>
        <ToastContainer
          position="top-right"
          /* autoClose={5000} */
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
          {/* Same as */}
          <ToastContainer />
      </GoogleOAuthProvider>
    </Provider>
  //</React.StrictMode>,
)
