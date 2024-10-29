import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Login from './layouts/Login.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<MainLayout />}>
      <Route path='' element={<App /> }  />
      <Route path='/login' element={<Login /> }  />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
