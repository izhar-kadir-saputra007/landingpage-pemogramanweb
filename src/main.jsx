import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Toast from "./components/Toast.jsx"
import "./index.css"
import App from "./App.jsx"
import Login from "./components/auth/Login.jsx"
import Register from "./components/auth/Register.jsx"

//admin
import Admin from "./components/Admin/Admin.jsx"
import Overview from "./components/Admin/Overview.jsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toast />
    <RouterProvider router={router} />
  </StrictMode>,
)