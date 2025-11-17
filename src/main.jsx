import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const router = createBrowserRouter(
  [
    {
      path: '*',
      element: <App />
    }
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <RouterProvider router={router} />
=======
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
>>>>>>> 0c51e77eaa8e2a04f0ee88da6f3983da03d1990f
)
