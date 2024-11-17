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
import Register from './layouts/Register.jsx'
import RetailerRegister from './layouts/RetailerSide/RetalerRegister.jsx'
import UserProfile from './layouts/Profile.jsx'
import RetailerDashboard from './layouts/RetailerSide/RetailerHome.jsx'
import Home from './layouts/Home.jsx'
import RetailerOrder from './layouts/RetailerSide/RetailerOrder.jsx'
import RetailerAddProduct from './layouts/RetailerSide/RetailerAddProduct.jsx'
import RetailerProductList from './layouts/RetailerSide/RetailerProductList.jsx'
import RetailerContact from './layouts/RetailerSide/RetailerContact.jsx'
import RetailerProfile from './layouts/RetailerSide/RetailerProfile.jsx'
import OrderDetailsPage from './layouts/RetailerSide/RetailerOrderDetails.jsx'
import RetailerProductDetail from './layouts/RetailerSide/RetailerProductDetails.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='' element={<App /> }  />
      <Route path='/login' element={<Login /> }  />
      <Route path='/register' element={<Register /> }  />
      <Route path='/home' element={<Home /> }  />
      <Route path='/profile' element={<UserProfile /> }  />
      <Route path='/about-us' element={<AboutUs /> }  />
      <Route path='/contact' element={<ContactUs /> }  />
      <Route path='/privacy-policy' element={<PrivacyPolicy /> }  />
      <Route path='/terms' element={<TermsAndConditions /> }  />
      <Route path='/retailer-register' element={<RetailerRegister /> }  />
      <Route path='/retailer-dashboard' element={<RetailerDashboard /> }  />
      <Route path='/retailer-order' element={<RetailerOrder /> }  />
      <Route path="/retailer-order-details/:id" element={<OrderDetailsPage />} />
      <Route path='/retailer-add-product' element={<RetailerAddProduct /> }  />
      <Route path='/retailer-product-list' element={<RetailerProductList /> }  />
      <Route path='/retailer-product-details/:id' element={<RetailerProductDetail /> }  />
      <Route path='/retailer-contact' element={<RetailerContact /> }  />
      <Route path='/retailer-profile' element={<RetailerProfile /> }  />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={router}/>
  // </StrictMode>,
)
