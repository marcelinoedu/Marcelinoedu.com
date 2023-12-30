import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import  {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom"
import Home from './routes/Home/Home.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import RouteMiddleware from './middleware/RouteMiddleware.tsx'

const router = createBrowserRouter([{
  path:"/",
  element: (<RouteMiddleware>
    <App />
  </RouteMiddleware>),
  children:[
    {path: "/", element: <Home/>},
    { path: "*", element: <Navigate to="/" replace /> },

  ]
}])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)
