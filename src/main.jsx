import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./index.css"
import App from "./App.jsx"
import Admin from "./components/Admin/Admin.jsx"
import Overview from "./components/Admin/Overview.jsx"
import Ecommerce from "./components/Admin/Ecommerce.jsx"
import Projects from "./components/Admin/Projects.jsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: 'ecommerce',
        element: <Ecommerce />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)