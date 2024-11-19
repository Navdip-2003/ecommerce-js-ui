import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import Login from './layouts/Login.jsx';
import AboutUs from './layouts/AboutUs.jsx';
import ContactUs from './layouts/ContactUs.jsx';
import PrivacyPolicy from './layouts/PrivacyPolicy.jsx';
import TermsAndConditions from './layouts/Terms&Conditions.jsx';
import Register from './layouts/Register.jsx';
import RetailerRegister from './layouts/RetailerSide/RetalerRegister.jsx';
import UserProfile from './layouts/Profile.jsx';
import RetailerDashboard from './layouts/RetailerSide/RetailerHome.jsx';
import Home from './layouts/Home.jsx';
import RetailerOrder from './layouts/RetailerSide/RetailerOrder.jsx';
import RetailerAddProduct from './layouts/RetailerSide/RetailerAddProduct.jsx';
import RetailerProductList from './layouts/RetailerSide/RetailerProductList.jsx';
import RetailerContact from './layouts/RetailerSide/RetailerContact.jsx';
import RetailerProfile from './layouts/RetailerSide/RetailerProfile.jsx';
import OrderDetailsPage from './layouts/RetailerSide/RetailerOrderDetails.jsx';
import RetailerProductDetail from './layouts/RetailerSide/RetailerProductDetails.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Separate route for Login (without MainLayout) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* MainLayout routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Route>

      {/* Retailer Routes */}
      <Route path="/retailer" element={<MainLayout />}>
        <Route index element={<RetailerDashboard />} />
        <Route path="retailer-register" element={<RetailerRegister />} />
        <Route path="order" element={<RetailerOrder />} />
        <Route path="order-details/:id" element={<OrderDetailsPage />} />
        <Route path="add-product" element={<RetailerAddProduct />} />
        <Route path="product-list" element={<RetailerProductList />} />
        <Route path="product-details/:id" element={<RetailerProductDetail />} />
        <Route path="contact" element={<RetailerContact />} />
        <Route path="profile" element={<RetailerProfile />} />
      </Route>

      {/* Admin Routes
      // <Route path="/admin" element={<AdminLayout />}>
      //   <Route path="dashboard" element={<AdminDashboard />} />
      //   <Route path="users" element={<UserManagement />} />
      //   <Route path="settings" element={<AdminSettings />} />
      // </Route> */}
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
