import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/App'
import About from './pages/About'
import './styles/globals.css'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/about', element: <About /> },
])

const container = document.getElementById('root')!
createRoot(container).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

