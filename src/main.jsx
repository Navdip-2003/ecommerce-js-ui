import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Login from './layouts/Login.jsx'
import AboutUs from './layouts/AboutUs.jsx'
import ContactUs from './layouts/ContactUs.jsx'
import PrivacyPolicy from './layouts/PrivacyPolicy.jsx'
import TermsAndConditions from './layouts/Terms&Conditions.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<MainLayout />}>
      <Route path='' element={<App /> }  />
      <Route path='/login' element={<Login /> }  />
      <Route path='/about-us' element={<AboutUs /> }  />
      <Route path='/contact' element={<ContactUs /> }  />
      <Route path='/privacy-policy' element={<PrivacyPolicy /> }  />
      <Route path='/terms' element={<TermsAndConditions /> }  />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={router}/>
  // </StrictMode>,
)
